/* Données — modifie / ajoute des objets pour personnaliser */
const DATA = [
  {
    id:1,
    name:"Calme nerveux",
    axis:"retenus",
    trait:"parle posément, structuré",
    show:"logique et mesuré",
    hide:"peur d'être jugé ridicule",
    signs:"mains froides, reformulations, vérifie ses mots"
  },
  {
    id:2,
    name:"Conciliant épuisé",
    axis:"retenus",
    trait:"apaisant, arrangeant",
    show:"disponible pour les autres",
    hide:"incapacité à poser des limites",
    signs:"acquiesce même quand c'est mal pour lui"
  },
  {
    id:3,
    name:"Idéaliste lucide",
    axis:"croire",
    trait:"valeurs fortes, critique",
    show:"engagement franc",
    hide:"fatigue morale et doute",
    signs:"se perd en arguments pour cacher sa lassitude"
  },
  {
    id:4,
    name:"Brillant maladroit",
    axis:"battants",
    trait:"humour, brio social",
    show:"aisance apparente",
    hide:"peur d'être incompétent",
    signs:"rit pour combler le blanc, évite les tâches prosaïques"
  },
  {
    id:5,
    name:"Impulsif lucide",
    axis:"rythme",
    trait:"agit vite, lucidité après coup",
    show:"efficace en crise",
    hide:"remords répétés",
    signs:"minimise, tente d'humouriser l'erreur"
  },
  {
    id:6,
    name:"Obsessif tendre",
    axis:"aiment",
    trait:"attention forte",
    show:"dévouement sincère",
    hide:"peur d'abandon",
    signs:"messages répétés, petites jalousies imprévues"
  },
 {
  id:7,
  name:"Introverti haut placé",
  axis:"retenus",
  trait:"statut élevé mais réservé",
  show:"calme, pondéré, discret en réunion",
  hide:"se sent illégitime ou épuisé par la représentation",
  signs:"observe plus qu’il ne parle, tension dans la mâchoire"
},
{
  id:8,
  name:"Dirigeant empathique",
  axis:"battants",
  trait:"autorité douce",
  show:"écoute sincèrement, valorise ses équipes",
  hide:"culpabilité constante, peur d’être trop faible",
  signs:"s’excuse souvent, charge émotionnelle lourde en silence"
},
{
  id:9,
  name:"Cynique lucide",
  axis:"croire",
  trait:"analyse froide du monde",
  show:"humour sec, intelligence vive",
  hide:"désespoir profond et peur de croire à nouveau",
  signs:"ironise sur tout, regarde dans le vide après ses blagues"
},
{
  id:10,
  name:"Observateur discret",
  axis:"retenus",
  trait:"perçoit tout, dit peu",
  show:"présence stable, rassurante",
  hide:"angoisse de ne pas exister tant qu’il reste silencieux",
  signs:"fixe les détails, note les comportements, s’efface dans les groupes"
},
{
  id:11,
  name:"Héroïque usé",
  axis:"battants",
  trait:"courageux, fiable",
  show:"prend sur lui, agit sans bruit",
  hide:"fatigue morale, sentiment d’être abandonné après l’effort",
  signs:"regarde au loin en silence, rictus avant chaque décision"
},
{
  id:12,
  name:"Intellectuel détaché",
  axis:"croire",
  trait:"raisonne tout",
  show:"calme, logique, convaincant",
  hide:"incapacité à ressentir pleinement, peur du chaos émotionnel",
  signs:"parle avec détours, fuit les regards trop directs"
},
{
  id:13,
  name:"Extraverti anxieux",
  axis:"rythme",
  trait:"sociable, bavard",
  show:"détend les autres, sait meubler le silence",
  hide:"angoisse du vide intérieur, peur d’être seul",
  signs:"enchaîne les blagues, se fatigue brutalement après les soirées"
},
{
  id:14,
  name:"Protecteur rancunier",
  axis:"aiment",
  trait:"fidèle, loyal",
  show:"défend farouchement ceux qu’il aime",
  hide:"colère ancienne, rancune contre l’ingratitude",
  signs:"voix dure, gestes retenus, mémoire sélective"
},
{
  id:15,
  name:"Rêveur pragmatique",
  axis:"croire",
  trait:"poète mais lucide",
  show:"trouve du sens dans le banal",
  hide:"sent qu’il rate sa propre vie en la contemplant trop",
  signs:"sourire flottant, phrases inachevées, collectionne des petits objets"
},
{
  id:16,
  name:"Serviable calculateur",
  axis:"retenus",
  trait:"aide beaucoup, discret",
  show:"prévenant et efficace",
  hide:"fait tout pour garder une position sûre",
  signs:"regarde si on remarque son aide, petites crispations quand ignoré"
},
{
  id:17,
  name:"Solitaire lucide",
  axis:"rythme",
  trait:"vit bien seul, observateur",
  show:"suffisance tranquille",
  hide:"crainte de ne plus savoir aimer",
  signs:"réponses brèves mais réfléchies, mouvements mesurés"
},
{
  id:18,
  name:"Optimiste de façade",
  axis:"croire",
  trait:"encourage les autres",
  show:"énergie, humour, discours positif",
  hide:"dépression masquée, peur d’être un poids",
  signs:"rit à contretemps, yeux fatigués, esquive les compliments"
},
{
  id:19,
  name:"Ambitieux pudique",
  axis:"battants",
  trait:"très compétent mais modeste",
  show:"réservé sur ses succès",
  hide:"peur d’attirer la jalousie ou d’échouer ensuite",
  signs:"parle de “chance”, évite de dire non"
},
{
  id:20,
  name:"Intransigeant blessé",
  axis:"aiment",
  trait:"ferme, exigeant",
  show:"franchise brute",
  hide:"peur d’être trahi, attachement intense refoulé",
  signs:"poings serrés, critiques dures mais cohérentes"
},
{
  id:21,
  name:"Rationnel protecteur",
  axis:"battants",
  trait:"pense avant d’agir, protège par logique",
  show:"planifie, rassure par la maîtrise",
  hide:"émotions verrouillées, peur d’échouer à protéger",
  signs:"tics de contrôle, pose beaucoup de questions avant de bouger"
}

];

/* --- logique d'affichage et filtres --- */
const $list = document.getElementById('list');
const $search = document.getElementById('search');
const $axis = document.getElementById('axisFilter');
const $sort = document.getElementById('sortBy');
const $reset = document.getElementById('reset');

function render(items){
  $list.innerHTML = '';
  if(!items.length){
    $list.innerHTML = '<div class="small" style="color:var(--muted)">Aucun résultat.</div>';
    return;
  }
  items.forEach(it=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div class="title">${escapeHtml(it.name)}</div>
      <div class="meta small">${escapeHtml(it.trait)} • <span class="tag">${escapeHtml(axisLabel(it.axis))}</span></div>
      <div class="excerpt">${escapeHtml(it.show)}</div>
      <div class="small">Ce qu'il cache: ${escapeHtml(it.hide)}</div>
      <div class="small">Signes: ${escapeHtml(it.signs)}</div>
    `;
    $list.appendChild(el);
  });
}

function axisLabel(key){
  const map = {
    retenus:"Ceux qui se retiennent",
    battants:"Ceux qui se battent",
    croire:"Ceux qui veulent croire",
    rythme:"Ceux qui n'ont pas trouvé leur rythme",
    aiment:"Ceux qui aiment mal"
  };
  return map[key] || key;
}

function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g,c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }

function filterAndSort(){
  const term = ($search.value||'').toLowerCase().trim();
  const axis = $axis.value;
  let out = DATA.filter(d=>{
    if(axis && d.axis !== axis) return false;
    if(!term) return true;
    return (d.name + ' ' + d.trait + ' ' + d.show + ' ' + d.hide + ' ' + d.signs).toLowerCase().includes(term);
  });

  const [key,dir] = ($sort.value||'name:asc').split(':');
  out.sort((a,b)=>{
    const A = (a[key]||'').toLowerCase();
    const B = (b[key]||'').toLowerCase();
    if(A < B) return dir === 'asc' ? -1 : 1;
    if(A > B) return dir === 'asc' ? 1 : -1;
    return 0;
  });

  return out;
}

/* événements */
$search.addEventListener('input', ()=> render(filterAndSort()));
$axis.addEventListener('change', ()=> render(filterAndSort()));
$sort.addEventListener('change', ()=> render(filterAndSort()));
$reset.addEventListener('click', ()=> {
  $search.value = ''; $axis.value = ''; $sort.value = 'name:asc'; render(filterAndSort());
});

/* initial */
render(filterAndSort());

// Les particules

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedY = Math.random() * 0.5 + 0.1;
    this.alpha = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.y -= this.speedY;
    if (this.y < 0) this.reset();
  }
  draw() {
    ctx.fillStyle = `rgba(178,34,34,${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

const particles = Array.from({length: 80}, () => new Particle());

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
