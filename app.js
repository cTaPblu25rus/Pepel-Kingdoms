(() => {
const G = window.GAME, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const TABS = ["home","updates","bugs","items","chars","mobs","world","video","sounds","dl","ideas"];
let L = "ru";
try { L = localStorage.getItem("lang") || "ru"; } catch (e) {}
const T = k => k.split(".").reduce((o, p) => o && o[p], UI[L]) || k;
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const IT = Object.fromEntries(G.items.map(i => [i.id, i]));
const icon = id => IT[id] && IT[id].icon ? `assets/icons/${id}.png` : "assets/ui/ui_bag.png";
const nm = id => IT[id] ? IT[id][L] : id;

/* ---------- звук ---------- */
let sndOn = true, musOn = false, cur = null;
try { sndOn = localStorage.getItem("snd") !== "0"; } catch (e) {}
const sfxCache = {};
function sfx(n, v = .5) { if (!sndOn) return; const a = (sfxCache[n] ||= new Audio(`assets/sfx/${n}.mp3`)).cloneNode(); a.volume = v; a.play().catch(() => {}); }
const TRACKS = [
  ["chip_menu", "Главное меню", "Main menu"], ["chip_day", "День в мире", "Open world"], ["chip_town", "Город", "Town"],
  ["chip_battle", "Ночь и бой", "Night & combat"], ["festival", "Праздник", "Festival"], ["night", "Пещеры", "Caves"]];
const music = new Audio(); music.loop = true; music.volume = .35;
function playTrack(i) {
  const t = TRACKS[i]; if (cur === i && !music.paused) { music.pause(); musOn = false; } else { if (cur !== i) music.src = `assets/music/${t[0]}.mp3`; cur = i; music.play().catch(() => {}); musOn = true; }
  renderTracks(); $("#mus").classList.toggle("on", musOn);
}
$("#mus").onclick = () => playTrack(cur ?? 0);
$("#snd").onclick = () => { sndOn = !sndOn; try { localStorage.setItem("snd", sndOn ? "1" : "0"); } catch (e) {} $("#snd span").textContent = sndOn ? "🔊" : "🔇"; sfx("pickup"); };

/* ---------- фон: звёзды, угли, холмы ---------- */
const cv = $("#bg"), cx = cv.getContext("2d"); let W, H, stars = [], embers = [], t0 = 0;
function rs() { W = cv.width = innerWidth >> 1; H = cv.height = innerHeight >> 1; cv.style.imageRendering = "pixelated";
  stars = Array.from({length: 90}, () => ({x: Math.random() * W, y: Math.random() * H * .6, b: Math.random() * 6.28}));
  embers = Array.from({length: 60}, newEmber); }
function newEmber() { return {x: Math.random() * W, y: H + Math.random() * H, v: .2 + Math.random() * .5, s: Math.random() < .3 ? 2 : 1, w: Math.random() * 6.28}; }
function hill(par, base, amp, col, t) { cx.fillStyle = col; cx.beginPath(); cx.moveTo(0, H);
  for (let x = 0; x <= W; x += 4) cx.lineTo(x, Math.round(H * base + Math.sin((x + t * par) * .012) * amp + Math.sin((x + t * par) * .031) * amp * .4)); cx.lineTo(W, H); cx.fill(); }
function frame(t) { t0 = t / 16;
  const g = cx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#0d0a1c"); g.addColorStop(.6, "#2a1424"); g.addColorStop(1, "#4a1f1a"); cx.fillStyle = g; cx.fillRect(0, 0, W, H);
  for (const s of stars) { cx.fillStyle = `rgba(255,240,210,${.35 + .35 * Math.sin(s.b + t0 * .05)})`; cx.fillRect(s.x | 0, s.y | 0, 1, 1); }
  const mx = W * .8 | 0, my = H * .16 | 0; cx.fillStyle = "rgba(246,231,184,.12)"; cx.beginPath(); cx.arc(mx, my, 18, 0, 7); cx.fill(); cx.fillStyle = "#f6e7b8"; cx.beginPath(); cx.arc(mx, my, 9, 0, 7); cx.fill(); cx.fillStyle = "#e2cf98"; cx.fillRect(mx - 3, my - 2, 2, 2); cx.fillRect(mx + 2, my + 3, 3, 2);
  hill(.15, .62, 14, "#24142a", t0); hill(.35, .72, 10, "#1b1020", t0);
  // замок на дальнем холме
  const kx = ((W * .3 - t0 * .15) % (W + 80) + W + 80) % (W + 80) - 40, ky = H * .6 | 0; cx.fillStyle = "#24142a";
  cx.fillRect(kx, ky - 20, 30, 22); cx.fillRect(kx - 4, ky - 30, 8, 30); cx.fillRect(kx + 26, ky - 30, 8, 30); cx.fillRect(kx + 11, ky - 38, 8, 20);
  cx.fillStyle = "#ffb34a"; cx.fillRect(kx + 14, ky - 30, 2, 3); cx.fillRect(kx + 6, ky - 12, 2, 3);
  hill(.7, .84, 7, "#120a12", t0);
  for (const e of embers) { e.y -= e.v; e.x += Math.sin(e.w + e.y * .03) * .3; if (e.y < -4) Object.assign(e, newEmber(), {y: H + 4});
    const a = Math.min(1, e.y / H); cx.fillStyle = `rgba(255,${120 + (e.s * 40)},40,${a})`; cx.fillRect(e.x | 0, e.y | 0, e.s, e.s); }
  requestAnimationFrame(frame); }
addEventListener("resize", rs); rs(); requestAnimationFrame(frame);

/* ---------- анимированные спрайты ---------- */
const anims = new Set();
function sprite(name, frames, fw, fh, h, fps = 9) {
  const d = document.createElement("div"); d.className = "spr"; const sc = h / fh;
  d.style.cssText = `width:${fw * sc}px;height:${h}px;background-image:url(assets/sprites/${name}.png);background-size:${frames * 100}% 100%`;
  d._n = frames; d._f = 0; d._fps = fps; d._t = 0; anims.add(d); return d; }
function setSheet(d, name, frames) { d.style.backgroundImage = `url(assets/sprites/${name}.png)`; d.style.backgroundSize = `${frames * 100}% 100%`; d._n = frames; d._f = 0; }
let last = 0;
(function tick(t) { const dt = t - last; last = t;
  for (const d of anims) { if (!d.isConnected) { anims.delete(d); continue; } d._t += dt; if (d._t > 1000 / d._fps) { d._t = 0; d._f = (d._f + 1) % d._n; d.style.backgroundPosition = `${d._n > 1 ? d._f / (d._n - 1) * 100 : 0}% 0`;
    if (d._f === 0 && d._once) { d._once(); d._once = null; } } }
  requestAnimationFrame(tick); })(0);

/* ---------- вкладки ---------- */
function go(id, push = true) { if (!TABS.includes(id)) id = "home";
  $$("section").forEach(s => s.classList.toggle("on", s.id === "tab-" + id)); $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.go === id));
  if (push) history.replaceState(null, "", "#" + id); scrollTo({top: 0}); if (id !== "home") $("#homevid").pause(); }
document.addEventListener("click", e => { const g = e.target.closest("[data-go]"); if (g) { sfx("page", .4); go(g.dataset.go); }
  else if (e.target.closest("button,.btn")) sfx("pickup", .25); });

/* ---------- отрисовка по языку ---------- */
function render() {
  document.documentElement.lang = L; $("#lang").textContent = L === "ru" ? "EN" : "RU";
  $$("[data-t]").forEach(e => e.textContent = T(e.dataset.t));
  $("#tabs").innerHTML = TABS.map(k => `<button data-go="${k}">${T("tabs." + k)}</button>`).join("");
  $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.go === (location.hash.slice(1) || "home")));
  const i = L === "ru" ? 0 : 1;
  $("#stats").innerHTML = [[G.items.length, L === "ru" ? "предметов" : "items"], [G.mobs.length, L === "ru" ? "существ" : "creatures"], [6, L === "ru" ? "профессий" : "professions"], [8, L === "ru" ? "станков" : "stations"]].map(s => `<div class="stat"><b>${s[0]}</b>${s[1]}</div>`).join("");
  $("#features").innerHTML = FEATURES.map(f => `<div class="panel feat"><img src="assets/ui/${f[0]}.png" alt=""><div><h3>${f[1 + i]}</h3>${f[3 + i]}</div></div>`).join("");
  $("#updlist").innerHTML = UPDATES.map(u => `<div class="upd"><h3>v${u.v} — ${u[L]} <span>${u.date}</span></h3><ul>${u["items_" + L].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
  $("#buglist").innerHTML = BUGS.map(b => `<div class="bug"><span class="tag">v${b[0]}</span><div><s>${esc(b[1 + i])}</s> <span style="color:var(--green)">✔ ${L === "ru" ? "исправлено" : "fixed"}</span></div></div>`).join("");
  $("#worldlist").innerHTML = WORLD[L].map(w => `<div class="panel" style="margin:0"><h3>${w[0]}</h3>${w[1]}</div>`).join("");
  $("#steps").innerHTML = UI[L].installSteps.map(s => `<li>${s}</li>`).join("");
  $("#credits").innerHTML = CREDITS.map(c => `<li>${esc(c)}</li>`).join("");
  $("#isearch").placeholder = T("search"); $("#itext").placeholder = T("ideaText");
  $("#itype").innerHTML = UI[L].ideaTypes.map((x, k) => `<option value="${k}">${x}</option>`).join("");
  renderFilters(); renderItems(); renderChars(); renderMobs(); renderTracks(); renderSfx();
}
$("#lang").onclick = () => { L = L === "ru" ? "en" : "ru"; try { localStorage.setItem("lang", L); } catch (e) {} render(); };

/* ---------- предметы ---------- */
let cat = "", sel = "sword_iron", q = "";
const CATS = Object.keys(G.cats).filter(c => G.items.some(i => i.cat === c));
function renderFilters() { $("#ifilters").innerHTML = [["", T("all")], ...CATS.map(c => [c, G.cats[c][L === "ru" ? 0 : 1]])].map(c => `<button class="btn ${c[0] === cat ? "on" : ""}" data-cat="${c[0]}">${c[1]}</button>`).join(""); }
$("#ifilters").onclick = e => { const b = e.target.closest("[data-cat]"); if (!b) return; cat = b.dataset.cat; renderFilters(); renderItems(); };
$("#isearch").oninput = e => { q = e.target.value.trim().toLowerCase(); renderItems(); };
function renderItems() {
  const list = G.items.filter(i => (!cat || i.cat === cat) && (!q || i.ru.toLowerCase().includes(q) || i.en.toLowerCase().includes(q)));
  $("#icount").textContent = `${list.length} / ${G.items.length}`;
  $("#igrid").innerHTML = list.map(i => `<div class="ic ${i.id === sel ? "sel" : ""}" data-it="${i.id}" title="${esc(i[L])}"><img src="${icon(i.id)}" alt="${esc(i[L])}" loading="lazy"></div>`).join("");
  showItem(sel); }
document.addEventListener("click", e => { const c = e.target.closest("[data-it]"); if (!c) return; sel = c.dataset.it; $$(".ic").forEach(x => x.classList.toggle("sel", x.dataset.it === sel)); showItem(sel);
  if (c.classList.contains("n")) { go("items"); renderItems(); } if (innerWidth < 820) $("#iview").scrollIntoView({behavior: "smooth"}); });
function showItem(id) { let i = IT[id]; if (!i) { const f = $("#igrid .ic"); if (!f) return; sel = f.dataset.it; f.classList.add("sel"); i = IT[sel]; id = sel; } const st = L === "ru" ? i.s : i.se;
  const usedIn = G.items.filter(x => x.r && x.r.need[id]).slice(0, 12);
  const other = L === "ru" ? i.en : i.ru;
  $("#iview").innerHTML = `<div class="iv-head"><img src="${icon(id)}" alt=""><div><h3 style="margin:0">${esc(i[L])}</h3><div class="mute">${esc(other)} · ${G.cats[i.cat] ? G.cats[i.cat][L === "ru" ? 0 : 1] : i.cat}</div></div></div>
  ${i.d && L === "ru" ? `<p>${esc(i.d)}</p>` : ""}
  <div class="iv-st">${st.map(s => `<span>${esc(s)}</span>`).join("")}${i.p ? `<span><img src="assets/ui/ui_gold.png" style="width:14px;vertical-align:-2px"> ${T("price")}: ${i.p}</span>` : ""}</div>
  ${i.r ? `<div class="pix">${T("craftAt")}: <span style="color:var(--gold)">${L === "ru" ? G.stations[i.r.st] : G.stations_en[i.r.st]}</span>${i.r.c > 1 ? ` · ×${i.r.c}` : ""}</div>
  <div class="need">${Object.entries(i.r.need).map(([k, n]) => `<div class="n" data-it="${k}"><img src="${icon(k)}" alt="">${esc(nm(k))} ×${n}</div>`).join("")}</div>` : `<p class="mute">${T("noRecipe")}</p>`}
  ${usedIn.length ? `<div class="pix" style="margin-top:12px">${L === "ru" ? "Нужен для" : "Used in"}:</div><div class="need">${usedIn.map(x => `<div class="n" data-it="${x.id}"><img src="${icon(x.id)}" alt="">${esc(x[L])}</div>`).join("")}</div>` : ""}`; }

/* ---------- персонажи ---------- */
function charCard(c) { const d = document.createElement("div"); d.className = "card"; const ln = c["lines_" + L];
  d.innerHTML = `<div class="stage"><span class="hint">▶ ${T("play")}</span></div><h3>${c[L]}</h3><div class="say" title="${T("next")}">${esc(ln[0])}</div>
  <div><b class="pix" style="font-size:13px;color:var(--mute)">${T("role")}</b><br>${esc(c["role_" + L])}</div>
  <details><summary>${T("story")}</summary><p>${esc(c["story_" + L])}</p></details>`;
  const s = sprite(c.id + "_walk", c.walk, 128, 128, 128); d.querySelector(".stage").append(s);
  let k = 0; const say = d.querySelector(".say");
  say.onclick = () => { k = (k + 1) % ln.length; say.textContent = ln[k]; sfx("page", .3); };
  d.querySelector(".stage").onclick = () => { setSheet(s, c.id + "_" + c.act, c.actn); sfx(c.act === "spellcast" ? "fire" : "swing", .4); s._once = () => setSheet(s, c.id + "_walk", c.walk); say.onclick(); };
  return d; }
function renderChars() { $("#profs").replaceChildren(...G.chars.filter(c => c.kind === "prof").map(charCard)); $("#npcs").replaceChildren(...G.chars.filter(c => c.kind === "npc").map(charCard)); }

/* ---------- существа ---------- */
function renderMobs() { $("#moblist").replaceChildren(...G.mobs.map(m => { const d = document.createElement("div"); d.className = "card";
  d.innerHTML = `<div class="stage ${m.hostile ? "dark" : ""}">${m.lpc ? `<span class="hint">▶ ${T("play")}</span>` : ""}</div><h3>${m[L]}</h3>
  <div class="tagl">${m.boss ? `<span class="b">${T("boss")}</span>` : ""}<span class="${m.hostile ? "h" : "p"}">${m.hostile ? T("hostile") : T("peaceful")}</span>${m.fly ? `<span>${T("flying")}</span>` : ""}</div>
  <div>❤ ${T("hp")}: <b>${m.hp}</b>${m.dmg ? ` · ⚔ ${T("dmg")}: <b>${m.dmg}</b>` : ""}</div><p style="margin:6px 0">${esc(m["d_" + L])}</p>
  ${m.drops.length ? `<div class="pix" style="font-size:13px;color:var(--mute)">${T("drops")}</div><div class="drops">${m.drops.map(x => `<img src="${icon(x)}" title="${esc(nm(x))}" alt="${esc(nm(x))}">`).join("")}</div>` : ""}`;
  const h = m.lpc ? 128 : Math.min(110, m.h); const s = sprite("m_" + m.id + "_walk", m.walk, m.w, m.h, h, m.lpc ? 9 : 6); d.querySelector(".stage").append(s);
  if (m.lpc) d.querySelector(".stage").onclick = () => { setSheet(s, "m_" + m.id + "_slash", m.actn); sfx("swing", .4); s._once = () => setSheet(s, "m_" + m.id + "_walk", m.walk); };
  return d; })); }

/* ---------- звуки ---------- */
function renderTracks() { $("#tracks").innerHTML = TRACKS.map((t, i) => `<div class="tr ${cur === i && musOn ? "on" : ""}"><button class="btn" data-tr="${i}">${cur === i && musOn ? "❚❚" : "▶"}</button><span class="eq"><i></i><i></i><i></i></span><div><b>${L === "ru" ? t[1] : t[2]}</b><div class="mute" style="font-size:13px">${t[0]}.ogg</div></div></div>`).join("") +
  `<p class="mute" style="font-size:13px">Chiptune Adventures — Juhani Junkala, CC0</p>`; }
$("#tracks").onclick = e => { const b = e.target.closest("[data-tr]"); if (b) playTrack(+b.dataset.tr); };
const SFX = [["swing", "Удар", "Swing"], ["build", "Стройка", "Build"], ["craft", "Крафт", "Craft"], ["coin", "Монеты", "Coins"], ["chest", "Сундук", "Chest"], ["gem", "Самоцвет", "Gem"], ["heal", "Лечение", "Heal"], ["levelup", "Новый уровень", "Level up"], ["quest", "Задание", "Quest"], ["fire", "Огненный шар", "Fireball"], ["pickup", "Подобрать", "Pick up"], ["page", "Страница", "Page"]];
function renderSfx() { $("#sfxlist").innerHTML = SFX.map(s => `<button class="btn" data-sfx="${s[0]}">🔈 ${L === "ru" ? s[1] : s[2]}</button>`).join(""); }
$("#sfxlist").onclick = e => { const b = e.target.closest("[data-sfx]"); if (b) { const was = sndOn; sndOn = true; sfx(b.dataset.sfx, .7); sndOn = was; } };

/* ---------- главная: бегущие герои ---------- */
const wl = $("#walkers"); const crew = ["p_warrior", "p_mage", "p_hunter", "n_guard", "p_farmer", "p_smith", "n_king", "p_merchant"];
const walkers = crew.map((id, k) => { const s = sprite(id + "_walk_r", 8, 128, 128, 128, 10); s._x = k * 170; wl.append(s); return s; });
(function run() { if (!wl.clientWidth) return requestAnimationFrame(run); const w = wl.clientWidth + 140; for (const s of walkers) { s._x = (s._x + 1.2) % (w + 200); s.style.left = (s._x - 140) + "px"; } requestAnimationFrame(run); })();
const zz = sprite("m_zombie_walk_r", 8, 128, 128, 128, 7); zz._x = -400; wl.append(zz); walkers.push(zz);

/* ---------- галерея ---------- */
const SHOTS = ["town", "market", "gate", "tower", "dialog", "flirt", "gift", "family", "house", "guild", "build", "palette", "skills", "anvil"];
$("#gal").innerHTML = SHOTS.map(s => `<img src="assets/img/shot_${s}.jpg" alt="${s}" loading="lazy">`).join("");
$("#gal").onclick = e => { if (e.target.tagName === "IMG") { $("#lb img").src = e.target.src; $("#lb").style.display = "flex"; } };
$("#lb").onclick = () => $("#lb").style.display = "none";

/* ---------- видео, скачивание, предложения ---------- */
if (CONFIG.youtube) { $("#ytbox").style.display = ""; $("#ytframe").src = `https://www.youtube-nocookie.com/embed/${CONFIG.youtube}`; }
$("#apk1").href = CONFIG.apk; $("#apk2").href = CONFIG.apkDev;
const repoUrl = `https://github.com/${CONFIG.repo}`; $("#repo").href = repoUrl; $("#iall").href = repoUrl + "/issues";
$$("#apk1,#apk2").forEach(a => a.addEventListener("click", () => sfx("coin", .6)));
$("#isend").onclick = () => { const txt = $("#itext").value.trim(); if (!txt) { toast(L === "ru" ? "Напишите текст" : "Write something first"); return; }
  const ty = UI[L].ideaTypes[$("#itype").value]; const title = `[${ty}] ${$("#ititle").value.trim() || txt.slice(0, 60)}`;
  const body = `${txt}\n\n---\n${L === "ru" ? "Версия игры" : "Game version"}: ${CONFIG.version}\n${L === "ru" ? "Отправлено с сайта" : "Sent from the website"}`;
  sfx("quest", .6); window.open(`${repoUrl}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`, "_blank", "noopener"); };
function toast(m) { const t = $("#toast"); t.textContent = m; t.style.display = "block"; clearTimeout(t._h); t._h = setTimeout(() => t.style.display = "none", 2200); }

$("#snd span").textContent = sndOn ? "🔊" : "🔇";
render(); go(location.hash.slice(1) || "home", false);
addEventListener("hashchange", () => go(location.hash.slice(1), false));
})();
