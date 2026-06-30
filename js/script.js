// ══════════════════════════════════════════════
//  TOYNEXX — Production Application v2.0
//  Admin: toynexx.owner@gmail.com / TN@dmin2025!
// ══════════════════════════════════════════════

// ── PRIVATE ADMIN CREDENTIALS (hashed in real app) ──
const ADMIN = {
  email: 'toynexx.owner@gmail.com',
  password: 'TN@dmin2025!',
  name: 'TOYNEXX Owner',
  role: 'admin',
  id: 'admin_root',
  avatar: '🔑'
};

// ── PRODUCT IMAGE MAPS (real Unsplash images) ──
const PROD_IMGS = {
  p1: ['https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&q=85','https://images.unsplash.com/photo-1599522554041-cef10a3ce26e?w=600&q=85'],
  p2: ['https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=600&q=85','https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=600&q=85'],
  p3: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85','https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&q=85'],
  p4: ['https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&q=85','https://images.unsplash.com/photo-1583853287541-6b1bc2282df8?w=600&q=85'],
  p5: ['https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=85','https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&q=85'],
  p6: ['https://images.unsplash.com/photo-1630468891413-5c425c601fac?w=600&q=85','https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=85'],
  p7: ['https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=85','https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&q=85'],
  p8: ['https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=600&q=85','https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=600&q=85'],
  p9: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85','https://images.unsplash.com/photo-1621508638997-e30808c10653?w=600&q=85'],
  p10:['https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&q=85','https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&q=85'],
  p11:['https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=85','https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&q=85'],
  p12:['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=85','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85'],
  p13:['https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=85','https://images.unsplash.com/photo-1619855544858-e8e275c3b31a?w=600&q=85'],
  p14:['https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=85','https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?w=600&q=85'],
  p15:['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=85','https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&q=85'],
  p16:['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=85','https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=85'],
};

// ── PRODUCT DATABASE ──
const DB = [
  {id:'p1',name:'Shadow Shinobi Naruto',desc:'Highly detailed Naruto Uzumaki figure in Sage Mode with interchangeable hands, Rasengan energy effect piece, and chakra flame display base. Hand-painted with premium gradient finish. Every detail from the forehead protector to the sage eyes is meticulously reproduced.',short:'Premium Naruto Sage Mode figure',price:149,orig:180,cat:'anime',series:'Naruto Shippuden',scale:'1:6',brand:'Bandai Tamashii',stock:25,sold:120,badge:'HOT',feat:true,trend:true,color:'var(--p)',rating:4.9,rCount:42},
  {id:'p2',name:'Iron Protocol MK-X',desc:'Limited Marvel Iron Man Mark X with die-cast metal chest plate, 32 points of articulation, working LED arc reactor, and 3 interchangeable flight effect stands. The most detailed Iron Man figure ever produced.',short:'LED Iron Man limited edition',price:289,orig:350,cat:'superheroes',series:'Marvel Legends',scale:'1:6',brand:'Hot Toys',stock:8,sold:95,badge:'NEW',feat:true,trend:true,color:'var(--b)',rating:4.8,rCount:32},
  {id:'p3',name:'GT-R Nismo R35 Racing',desc:'Authentic 1:18 scale diecast Nissan GT-R Nismo in Championship Blue with full opening doors, hood, and trunk. Features authentic rubber tires, detailed engine bay, photo-etched grille, and fully detailed interior.',short:'Premium diecast GT-R sports car',price:120,cat:'cars',series:'Premium Diecast',scale:'1:18',brand:'AUTOart Signature',stock:40,sold:200,badge:'RARE',feat:true,color:'#dc2626',rating:4.7,rCount:89},
  {id:'p4',name:'Dragon Soul Goku Ultra Instinct',desc:"Ultra Instinct Goku in mastered form with stunning silver-blue aura display stand, 4 sets of interchangeable hands, energy blast accessories, and Son Goku base figure. A true collector's masterpiece.",short:'Ultra Instinct Goku masterpiece',price:399,orig:450,cat:'anime',series:'Dragon Ball Super',scale:'1:4',brand:'MegaHouse G.E.M.',stock:5,sold:300,badge:'EXCL',feat:true,trend:true,color:'var(--pk)',rating:5.0,rCount:156},
  {id:'p5',name:'Master Grade Gundam RX-78-2',desc:'Master Grade 1/100 scale Gundam RX-78-2 with full inner frame, LED compatible cockpit, external armor layers, and 22 weapons. Over 220 individually crafted parts for the ultimate assembly experience.',short:'Master Grade Gundam kit',price:195,cat:'anime',series:'Mobile Suit Gundam',scale:'1:100',brand:'Bandai MG',stock:30,sold:78,color:'var(--p)',rating:4.6,rCount:41},
  {id:'p6',name:'Dark Knight Batman',desc:'DC Multiverse Batman with magnetic flowing fabric cape, 5 premium Batarang accessories, light-up chest emblem, and 30 points of articulation. Based on the iconic Dark Knight comics design.',short:'Premium DC Batman collector figure',price:175,cat:'superheroes',series:'DC Multiverse',scale:'1:6',brand:'McFarlane Platinum',stock:18,sold:62,badge:'NEW',color:'var(--b)',rating:4.5,rCount:28},
  {id:'p7',name:'Gold Armor Thor Asgardian',desc:'Rare collector-grade Thor figure with genuine 24K gold-plated armor sections, Mjolnir with lightning effect stand, Stormbreaker axe, and intricate Norse runework engravings. Ultra-limited production of only 500 units.',short:'24K gold Thor ultra limited',price:549,orig:699,cat:'limited',series:'Marvel Gold Collection',scale:'1:4',brand:'Sideshow Collectibles',stock:3,sold:47,badge:'RARE',feat:true,trend:true,color:'#dc2626',rating:5.0,rCount:23},
  {id:'p8',name:'Tanjiro Water Breathing',desc:'Demon Slayer Tanjiro Kamado in Hinokami Kagura form with translucent Water Breathing wave effect display, interchangeable Nezuko box accessory, and handcrafted Nichirin blade with authentic engravings.',short:'Demon Slayer Tanjiro figure',price:220,cat:'anime',series:'Demon Slayer',scale:'1:7',brand:'Aniplex+',stock:12,sold:175,color:'var(--pk)',rating:4.9,rCount:67},
  {id:'p9',name:'Lamborghini Aventador SVJ',desc:'Elite 1:12 scale Lamborghini Aventador SVJ 63 in Giallo Orion Yellow with genuine carbon fiber texture panels, working suspension system, steerable front wheels, and hand-applied exhaust detailing.',short:'1:12 Lamborghini elite model',price:380,cat:'cars',series:'Prestige Diecast',scale:'1:12',brand:'Kyosho Diecast',stock:7,sold:88,badge:'EXCL',trend:true,color:'#dc2626',rating:4.8,rCount:34},
  {id:'p10',name:'Luffy Gear 5 Sun God Nika',desc:"One Piece Monkey D. Luffy in Gear 5 Nika transformation with enormous cloud base stand, Joy Boy inscription, interchangeable laughing face, and white-hot flame effects. Bandai's rarest One Piece figure.",short:'One Piece Gear 5 Luffy',price:340,orig:400,cat:'limited',series:'One Piece',scale:'1:6',brand:'Bandai Spirits',stock:6,sold:290,badge:'HOT',feat:true,trend:true,color:'var(--pk)',rating:5.0,rCount:112},
  {id:'p11',name:'Miles Morales Spider-Man',desc:'Miles Morales Spider-Man with spectacular bio-electric purple lightning accessories, 30 points of articulation, 8 interchangeable web-effect hands, and web-slinging base display stand.',short:'Miles Morales premium figure',price:210,cat:'superheroes',series:'Spider-Verse Collection',scale:'1:6',brand:'Hot Toys',stock:15,sold:142,color:'var(--p)',rating:4.8,rCount:55},
  {id:'p12',name:'Ferrari SF90 Stradale Hybrid',desc:'Official Ferrari licensed 1:18 SF90 Stradale. Hand-assembled by Italian craftsmen with photo-etched grille inserts, realistic carbon fiber hood, opening components, and complete engine bay detail.',short:'Official Ferrari SF90 diecast',price:165,cat:'cars',series:'Ferrari Collection',scale:'1:18',brand:'BBurago Signature',stock:22,sold:95,color:'var(--pk)',rating:4.6,rCount:38},
  {id:'p13',name:'EVA Unit-01 Evangelion',desc:'Neon Genesis Evangelion Unit-01 in berserker mode with translucent AT Field effect parts, removable armor panels revealing inner mechanical detail, and urban destruction diorama base.',short:'Evangelion Unit-01 figure',price:260,cat:'anime',series:'Neon Genesis Evangelion',scale:'1:8',brand:'Kotobukiya ArtFX',stock:9,sold:66,badge:'NEW',color:'#22c55e',rating:4.7,rCount:29},
  {id:'p14',name:'Optimus Prime G1 Masterpiece',desc:'Transformers G1 Optimus Prime Masterpiece Edition with full MP-scale transformation, Matrix of Leadership accessory, Energon axe, original 1984 Diaclone cartoon-accurate deco.',short:'G1 Transformers Masterpiece',price:310,cat:'superheroes',series:'Transformers Masterpiece',scale:'1:64',brand:'Hasbro Masterpiece',stock:11,sold:78,badge:'RARE',color:'var(--b)',rating:4.7,rCount:44},
  {id:'p15',name:'Bugatti Chiron Pur Sport',desc:'Hand-assembled 1:8 Bugatti Chiron Pur Sport with over 1,500 individual components, working suspension with coilovers, photo-etched interior trim, and hand-applied quad exhaust tips.',short:'Elite Bugatti 1:8 model',price:480,cat:'cars',series:'Elite Motors Collection',scale:'1:8',brand:'Amalgam Collection',stock:4,sold:31,badge:'EXCL',trend:true,color:'var(--b)',rating:5.0,rCount:18},
  {id:'p16',name:'Gojo Satoru Domain Expansion',desc:'Jujutsu Kaisen Gojo Satoru with Unlimited Void domain expansion effect base, cerulean gradient display stand, interchangeable blindfolded and unmasked heads, and cursed energy aura effects.',short:'Gojo Domain Expansion set',price:295,orig:340,cat:'limited',series:'Jujutsu Kaisen',scale:'1:6',brand:'Aniplex+',stock:7,sold:198,badge:'HOT',feat:true,color:'var(--p)',rating:5.0,rCount:87},
];

// ── REVIEW DATA ──
const REV = {};
DB.forEach(p=>{REV[p.id]=[{u:'Kira S.',r:5,c:'Absolutely stunning quality. The detail on this is incredible — worth every rupee!',d:'Jan 15, 2025'},{u:'Marcus T.',r:p.rating>=4.8?5:4,c:'Perfect for my display cabinet. Arrived securely packed and exactly as described.',d:'Jan 20, 2025'},{u:'Priya M.',r:5,c:'Bought as a gift and my partner was speechless. TOYNEXX delivers on quality.',d:'Feb 3, 2025'}];});

// ── STATE ──
const S = {
  user: null,
  cart: [],
  orders: [],
  users: [],
  products: [],
  filtered: [],
  page: 1,
  perPage: 12,
  filter: {cat:'',badge:'',search:'',sort:'newest'},
  detail: null,
  detailQty: 1,
  coStep: 0,
  coData: {address:{},payMethod:'card'},
  lastOrderNum: '',
  adminTab: 'dashboard',
  editingProd: null,
  revRating: 5,
  discount: 0,
};

// ── INIT ──
function init() {
  // Load from localStorage
  const sc = localStorage.getItem('tnx_cart');
  const so = localStorage.getItem('tnx_orders');
  const su = localStorage.getItem('tnx_users');
  if(sc) try{S.cart=JSON.parse(sc)}catch(e){}
  if(so) try{S.orders=JSON.parse(so)}catch(e){}
  if(su) try{S.users=JSON.parse(su)}catch(e){}
  S.products = DB.map(p=>({...p}));
  S.filtered = [...S.products];

  initCursor();
  initCanvas();
  window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',window.scrollY>30));
  renderHome();
  updateCartBadge();
  renderAuthForm('login');
  setupHeroParallax();
}

// ── CURSOR ──
function initCursor(){
  const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
  if(!dot)return;
  let tx=0,ty=0;
  document.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';tx=e.clientX;ty=e.clientY;});
  const tick=()=>{const cx=parseFloat(ring.style.left||0),cy=parseFloat(ring.style.top||0);ring.style.left=(cx+(tx-cx)*.12)+'px';ring.style.top=(cy+(ty-cy)*.12)+'px';requestAnimationFrame(tick);};tick();
  document.addEventListener('mouseover',e=>{if(e.target.matches('button,a,[role="button"],.prod-card,.cat-card,input,select'))ring.classList.add('hov');else ring.classList.remove('hov');});
  document.body.style.cursor='none';
}

// ── CANVAS ──
function initCanvas(){
  const c=document.getElementById('bgc'),ctx=c.getContext('2d');let W,H,pts=[],streaks=[];
  const rz=()=>{W=c.width=window.innerWidth;H=c.height=window.innerHeight;};rz();window.addEventListener('resize',rz);
 const COLS = [
  'rgba(220,38,38,0.8)',   // gold
  'rgba(255,223,100,0.7)', // light gold
  'rgba(212,175,55,0.6)'   // deep gold
];
  for(let i=0;i<120;i++)pts.push({x:Math.random()*3000,y:Math.random()*2000,r:Math.random()*1.4+.3,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12-.05,a:Math.random()*.35+.08,c:COLS[i%3]});
  for(let i=0;i<8;i++)streaks.push({x:Math.random()*2000,y:Math.random()*1500,len:Math.random()*120+60,sp:Math.random()*1.2+.35,a:Math.random()*.15+.04,c:COLS[i%3],ang:Math.random()*Math.PI*2});
  const BLOBS=[{x:.14,y:.3,r:320,c:'rgba(220,38,38,.035)'},{x:.86,y:.7,r:270,c:'rgba(220,38,38,.03)'},{x:.5,y:.5,r:360,c:'rgba(212,175,55,.018)'}];
  const draw=()=>{
    ctx.clearRect(0,0,W,H);
    BLOBS.forEach(b=>{const g=ctx.createRadialGradient(b.x*W,b.y*H,0,b.x*W,b.y*H,b.r);g.addColorStop(0,b.c);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.arc(b.x*W,b.y*H,b.r,0,Math.PI*2);ctx.fill();});
    pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.y<-10)p.y=H+10;if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;ctx.save();ctx.globalAlpha=p.a;ctx.fillStyle=p.c;ctx.shadowBlur=6;ctx.shadowColor=p.c;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();ctx.restore();});
    streaks.forEach(s=>{s.x+=Math.cos(s.ang)*s.sp;s.y+=Math.sin(s.ang)*s.sp;if(s.x<-200||s.x>W+200||s.y<-200||s.y>H+200){s.x=Math.random()*W;s.y=Math.random()*H;}const gr=ctx.createLinearGradient(s.x,s.y,s.x-Math.cos(s.ang)*s.len,s.y-Math.sin(s.ang)*s.len);gr.addColorStop(0,s.c);gr.addColorStop(1,'transparent');ctx.save();ctx.globalAlpha=s.a;ctx.strokeStyle=gr;ctx.lineWidth=1;ctx.shadowBlur=4;ctx.shadowColor=s.c;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x-Math.cos(s.ang)*s.len,s.y-Math.sin(s.ang)*s.len);ctx.stroke();ctx.restore();});
    requestAnimationFrame(draw);
  };draw();
}

// ── PAGE ROUTER ──

function goPage(id){

  history.pushState({page:id},"","#"+id);

  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  
  const pg=document.getElementById(id+'-page');

  if(!pg)return;

  pg.classList.add('active');
  
  window.scrollTo({top:0,behavior:'instant'});

  if(id==='products')renderProductsPage();

  //if(id==='newarrival')renderProductsPage();

  if(id==='checkout')renderCheckout();

  if(id==='orders'){if(!S.user){openAuth();return;}renderOrders();}

  if(id==='dashboard'){if(!S.user){openAuth();return;}renderDashboard();}

  if(id==='admin'){
    if(!S.user||S.user.role!=='admin'){toast('Admin access only','err');openAuth();return;}
    renderAdminTab(S.adminTab);
  }

}


/* 🔥 BACK BUTTON FIX */

window.onpopstate=function(event){

  if(document.getElementById('cart-dr').classList.contains('open')){

closeCart();
return;

}

  if(event.state && event.state.page){

    document.querySelectorAll('.page')
    .forEach(p=>p.classList.remove('active'));

    const pg=document.getElementById(
      event.state.page+'-page'
    );

    if(pg){
      pg.classList.add('active');
    }

  }

};

// ── HOME ──
const SHELF_DATA = [
  {id:'p1',name:'Naruto',price:'₹149'},
  {id:'p3',name:'GT-R',price:'₹120'},
  {id:'p2',name:'Iron Man',price:'₹289'},
  {id:'p4',name:'Goku UI',price:'₹399'},
  {id:'p10',name:'Luffy G5',price:'₹340'},
];
const CATS_DATA = [
  {key:'anime',label:'Anime',icon:'🎌',color:'var(--p)',count:'480+ figures',img:'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&q=80'},
  {key:'superheroes',label:'Superheroes',icon:'🦸',color:'var(--b)',count:'620+ figures',img:'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=150&q=80'},
  {key:'cars',label:'Die-Cast Cars',icon:'🏎️',color:'#dc2626',count:'340+ models',img:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=150&q=80'},
  {key:'limited',label:'Limited Edition',icon:'💎',color:'var(--pk)',count:'89 rare items',img:'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=150&q=80'},
];

function renderHome(){
  // Shelf
  const si = document.getElementById('shelf-items-row');
  if(si) si.innerHTML = SHELF_DATA.map(d=>{
    const img = (PROD_IMGS[d.id]||[])[0]||'';
    return `<div class="shelf-item" onclick="goPage('products')">
      <img class="shelf-img" src="${img}" alt="${d.name}" onerror="this.style.display='none'"/>
      <div class="shelf-name">${d.name}</div>
      <div class="shelf-price">${d.price}</div>
    </div>`;
  }).join('');
  // Categories
  const cg = document.getElementById('cat-grid');
  if(cg) cg.innerHTML = CATS_DATA.map(c=>`
    <div class="cat-card" style="--cc:${c.color}" onclick="goPage('products');filterCat('${c.key}')">
      <img class="cat-img" src="${c.img}" alt="${c.label}" onerror="this.src='';this.className='cat-icon';this.textContent='${c.icon}'"/>
      <div class="cat-name">${c.label}</div>
      <div class="cat-div"></div>
      <div class="cat-count">${c.count}</div>
    </div>`).join('');
  // Featured
  const fg = document.getElementById('featured-grid');
  if(fg) fg.innerHTML = S.products.filter(p=>p.feat).slice(0,8).map((p,i)=>prodCard(p,i)).join('');
  // Trending
  const tg = document.getElementById('trending-grid');
  if(tg) tg.innerHTML = S.products.filter(p=>p.trend).slice(0,4).map((p,i)=>prodCard(p,i)).join('');
}

// ── PRODUCT CARD ──
function prodCard(p, idx=0){
  const img = (PROD_IMGS[p.id]||[])[0]||'';
  const stars = '★'.repeat(Math.round(p.rating||0))+'☆'.repeat(5-Math.round(p.rating||0));
  const disc = p.orig?Math.round((1-p.price/p.orig)*100):0;
  const isWished = S.user?.wishlist?.includes(p.id);
  return `<div class="prod-card" style="--cc:${p.color||'var(--p)'}" onclick="openDetail('${p.id}')" tabindex="0" role="article" aria-label="${p.name}">
    ${p.badge?`<div class="prod-badge b-${p.badge.toLowerCase()}">${p.badge}</div>`:''}
    ${disc>0?`<div class="prod-disc">-${disc}%</div>`:''}
    <div class="prod-img-wrap">
      <img src="${img}" alt="${p.name}" loading="lazy" onerror="this.parentNode.style.background='radial-gradient(ellipse at 50% 50%,${p.color||'var(--p)'}22,#06030f)';this.style.display='none'" style="width:100%;height:100%;object-fit:cover"/>
      <div class="prod-hover-btns">
        <button class="phb add" onclick="event.stopPropagation();addToCart('${p.id}')" title="Add to cart" aria-label="Add ${p.name} to cart">🛒</button>
        <button class="phb wish ${isWished?'active':''}" onclick="event.stopPropagation();wishToggle('${p.id}',this)" title="Wishlist" aria-label="Add to wishlist">♡</button>
      </div>
    </div>
    <div class="prod-body">
      <div class="prod-ser">${p.series||p.cat}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-stars">${stars} <span>(${p.rCount||0})</span></div>
      <div class="prod-foot">
        <div style="display:flex;align-items:baseline;gap:0">
          <span class="prod-price">₹${p.price}</span>
          ${p.orig?`<span class="prod-orig">₹${p.orig}</span>`:''}
        </div>
        <button class="prod-add-sm" onclick="event.stopPropagation();addToCart('${p.id}')" aria-label="Quick add">+</button>
      </div>
      ${p.stock<10&&p.stock>0?`<div class="prod-stock-low">⚡ Only ${p.stock} left!</div>`:''}
      ${p.stock===0?`<div class="prod-oos">Out of stock</div>`:''}
    </div>
  </div>`;
}

// ── PRODUCTS PAGE ──
function renderProductsPage(){
  renderPills();
  applyFilters();
}

function renderPills(){
  const pills=[{key:'',label:'All'},...CATS_DATA.map(c=>({key:c.key,label:c.label}))];
  const el = document.getElementById('cat-pills');
  if(!el)return;
  el.innerHTML = pills.map(p=>{
    const active = S.filter.cat===p.key;
    return `<button onclick="filterCat('${p.key}')" style="padding:7px 16px;border-radius:20px;border:1px solid ${active?'var(--p)':'rgba(255,255,255,.1)'};background:${active?'rgba(220,38,38,.18)':'transparent'};color:${active?'var(--p)':'rgba(255,255,255,.48)'};font-family:'Exo 2',sans-serif;font-size:.76rem;cursor:pointer;transition:all .2s;letter-spacing:1px">${p.label}</button>`;
  }).join('');
}

function filterCat(cat){
  S.filter.cat=cat;S.filter.badge='';S.page=1;
  const h=document.getElementById('prod-heading');
  if(h)h.textContent=cat?(CATS_DATA.find(c=>c.key===cat)?.label?.toUpperCase()||'PRODUCTS'):'ALL COLLECTIBLES';
  if(document.getElementById('products-page').classList.contains('active')){renderPills();applyFilters();}
}
function filterBadge(badge){S.filter.badge=badge;S.filter.cat='';S.page=1;goPage('products');}
function liveSearch(v){S.filter.search=v.trim().toLowerCase();}
function doSearch(){S.page=1;applyFilters();}
function doSort(v){S.filter.sort=v;applyFilters();}

function clearFilters(){
  S.filter={cat:'',badge:'',search:'',sort:'newest'};S.page=1;
  const si=document.getElementById('srch-in');if(si)si.value='';
  const ss=document.getElementById('sort-sel');if(ss)ss.value='newest';
  const h=document.getElementById('prod-heading');if(h)h.textContent='ALL COLLECTIBLES';
  renderPills();applyFilters();
}

function applyFilters(){
  let list=[...S.products];
  const f=S.filter;
  if(f.cat)list=list.filter(p=>p.cat===f.cat);
  if(f.badge)list=list.filter(p=>p.badge===f.badge);
  if(f.search)list=list.filter(p=>p.name.toLowerCase().includes(f.search)||p.series?.toLowerCase().includes(f.search)||p.brand?.toLowerCase().includes(f.search));
  if(f.sort==='price_asc')list.sort((a,b)=>a.price-b.price);
  else if(f.sort==='price_desc')list.sort((a,b)=>b.price-a.price);
  else if(f.sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  else if(f.sort==='popular')list.sort((a,b)=>b.sold-a.sold);
  else list.sort((a,b)=>b.id.localeCompare(a.id));
  S.filtered=list;
  const hasF=f.cat||f.badge||f.search;
  const cb=document.getElementById('clear-btn');if(cb)cb.style.display=hasF?'flex':'none';
  const cl=document.getElementById('prod-count-lbl');if(cl)cl.textContent=`${list.length} item${list.length!==1?'s':''} found${f.search?` for "${f.search}"`:''}`;
  renderGrid();renderPagination();
}

function renderGrid(){
  const el=document.getElementById('products-grid');if(!el)return;
  const {filtered:list,page:pg,perPage:pp}=S;
  if(!list.length){el.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:70px 0"><div style="font-size:3.5rem;margin-bottom:18px">🔍</div><div style="font-family:'Orbitron',sans-serif;font-size:.9rem;letter-spacing:2px;color:rgba(255,255,255,.3);margin-bottom:18px">NO RESULTS FOUND</div><button class="btn-n" onclick="clearFilters()"><span>Clear Filters</span></button></div>`;return;}
  el.innerHTML=list.slice((pg-1)*pp,pg*pp).map((p,i)=>prodCard(p,i)).join('');
}

function renderPagination(){
  const pages=Math.ceil(S.filtered.length/S.perPage);
  const el=document.getElementById('pagination');if(!el)return;
  if(pages<=1){el.innerHTML='';return;}
  el.innerHTML=Array.from({length:pages},(_,i)=>`
    <button onclick="S.page=${i+1};renderGrid();renderPagination();window.scrollTo(0,200)" style="width:36px;height:36px;border-radius:8px;border:1px solid ${S.page===i+1?'var(--p)':'rgba(255,255,255,.1)'};background:${S.page===i+1?'rgba(220,38,38,.2)':'transparent'};color:${S.page===i+1?'var(--p)':'rgba(255,255,255,.38)'};cursor:pointer;font-family:'Orbitron',sans-serif;font-size:.72rem;transition:all .2s">${i+1}</button>`).join('');
}

// ── PRODUCT DETAIL ──
function openDetail(id){
  const p=S.products.find(x=>x.id===id);if(!p)return;
  S.detail=p;S.detailQty=1;
  goPage('detail');
  renderDetail(p);
}

function renderDetail(p){
  const imgs=PROD_IMGS[p.id]||[];
  const mainImg=imgs[0]||'';
  const stars='★'.repeat(Math.round(p.rating))+'☆'.repeat(5-Math.round(p.rating));
  const disc=p.orig?`$${p.orig-p.price}`:null;

  document.getElementById('breadcrumb').innerHTML=`
    <span class="bc-link" onclick="goPage('home')">Home</span><span> › </span>
    <span class="bc-link" onclick="goPage('products')">Products</span><span> › </span>
    <span class="bc-link" onclick="filterCat('${p.cat}');goPage('products')">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</span><span> › </span>
    <span style="color:rgba(255,255,255,.6)">${p.name}</span>`;

  document.getElementById('detail-content').innerHTML=`
  <div>
    <div class="d-img-main" style="background:radial-gradient(ellipse at 50% 50%,${p.color}18,#06030f)">
      <img id="d-main-img" src="${mainImg}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'"/>
      ${p.badge?`<div class="prod-badge b-${p.badge.toLowerCase()}" style="position:absolute;top:16px;left:16px;z-index:2">${p.badge}</div>`:''}
    </div>
    <div class="d-thumbs">
      ${imgs.map((img,i)=>`<div class="d-thumb ${i===0?'active':''}" onclick="document.getElementById('d-main-img').src='${img}';document.querySelectorAll('.d-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">
        <img src="${img}" alt="View ${i+1}" onerror="this.parentNode.style.display='none'"/>
      </div>`).join('')}
    </div>
  </div>
  <div>
    <div class="d-ser" style="color:${p.color}">${p.series||p.cat}</div>
    <div class="d-name">${p.name}</div>
    <div class="d-rat">
      <span class="d-stars">${stars}</span>
      <span style="font-family:'Orbitron',sans-serif;font-size:.85rem;color:#dc2626">${p.rating.toFixed(1)}</span>
      <span style="color:rgba(255,255,255,.32);font-family:'Exo 2',sans-serif;font-size:.8rem">(${p.rCount} reviews)</span>
    </div>
    <div class="d-price-row">
      <span class="d-price">₹${p.price}</span>
      ${p.orig?`<span class="d-orig">₹${p.orig}</span>`:''}
      ${disc?`<span class="d-save">Save ₹${p.orig-p.price}</span>`:''}
    </div>
    <p class="d-desc">${p.desc}</p>
    <div class="d-specs">
      ${p.scale?`<div class="d-chip"><span>Scale:</span>${p.scale}</div>`:''}
      ${p.brand?`<div class="d-chip"><span>Brand:</span>${p.brand}</div>`:''}
      <div class="d-chip"><span>Category:</span>${p.cat}</div>
    </div>
    <div class="d-stock">
      <div class="d-dot" style="background:${p.stock>0?'#22c55e':'var(--pk)'};color:${p.stock>0?'#22c55e':'var(--pk)'}"></div>
      <span style="color:${p.stock>0?'#22c55e':'var(--pk)'}">${p.stock>0?(p.stock<10?`Only ${p.stock} left in stock!`:'In Stock'):'Out of Stock'}</span>
    </div>
    <div class="d-qty-row">
      <span style="font-family:'Exo 2',sans-serif;font-size:.78rem;color:rgba(255,255,255,.38);letter-spacing:2px;text-transform:uppercase">Qty:</span>
      <div class="qty-ctrl">
        <button onclick="adjQty(-1)" aria-label="Decrease">−</button>
        <span id="d-qty">1</span>
        <button onclick="adjQty(1)" aria-label="Increase">+</button>
      </div>
    </div>
    <div class="d-btns">
      <button class="btn-p" onclick="buyNow('${p.id}')" style="flex:1;padding:14px" ${p.stock===0?'disabled':''}>BUY NOW</button>
      <button class="btn-n" onclick="addToCartQty('${p.id}')" style="flex:1;padding:14px" ${p.stock===0?'disabled':''}><span>ADD TO CART</span></button>
      <button onclick="wishToggle('${p.id}',this)" style="width:48px;height:48px;border:1px solid rgba(255,255,255,.1);border-radius:8px;background:none;color:rgba(255,255,255,.4);cursor:pointer;font-size:1.1rem;transition:all .3s" aria-label="Wishlist">♡</button>
    </div>
    <div class="trust-row">
      <div class="trust-item">🛡️ Authentic Guarantee</div>
      <div class="trust-item">📦 Secure Packaging</div>
      <div class="trust-item">🚚 Free Shipping</div>
      <div class="trust-item">↩️ Easy Returns</div>
    </div>
  </div>`;
  renderReviews(p);
}

function adjQty(d){
  const p=S.detail;if(!p)return;
  S.detailQty=Math.max(1,Math.min(p.stock||99,S.detailQty+d));
  const el=document.getElementById('d-qty');if(el)el.textContent=S.detailQty;
}
function addToCartQty(id){addToCart(id,S.detailQty);S.detailQty=1;const el=document.getElementById('d-qty');if(el)el.textContent=1;}
function buyNow(id){addToCartQty(id);closeCart();goPage('checkout');}

function renderReviews(p){
  const revs=REV[p.id]||[];
  const el=document.getElementById('reviews-wrap');if(!el)return;
  el.innerHTML=`
  <div class="rev-section">
    <div class="sec-hd"><div class="sec-title"><span class="grad">Customer</span> Reviews</div><div class="sec-line"></div><div class="sec-badge">${p.rCount} Reviews</div></div>
    ${S.user?`<div class="rev-form">
      <div style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:2px;margin-bottom:12px">WRITE A REVIEW</div>
      <div class="r-stars" id="r-stars">${[1,2,3,4,5].map(n=>`<button class="r-star ${n<=S.revRating?'on':''}" onclick="setRevStar(${n})">★</button>`).join('')}</div>
      <textarea class="n-in" id="rev-txt" placeholder="Share your experience with this collectible..." style="margin:12px 0"></textarea>
      <button class="btn-p btn-sm" onclick="submitRev('${p.id}')">SUBMIT REVIEW</button>
    </div>`:`<div style="background:rgba(12,6,28,.7);border:1px solid rgba(220,38,38,.14);border-radius:12px;padding:20px;margin-bottom:24px;text-align:center;font-family:'Exo 2',sans-serif;color:rgba(255,255,255,.38)"><span onclick="openAuth()" style="color:var(--p);cursor:pointer;text-decoration:underline">Sign in</span> to write a review</div>`}
    <div>${revs.map(r=>`<div class="rev-card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><div><div style="font-weight:700;color:#fff;margin-bottom:4px;font-family:'Exo 2',sans-serif">${r.u}</div><div style="color:#dc2626;font-size:.78rem;letter-spacing:3px">${'★'.repeat(r.r)}${'☆'.repeat(5-r.r)}</div></div><div style="font-size:.68rem;color:rgba(255,255,255,.22);font-family:'Exo 2',sans-serif">${r.d}</div></div><p style="color:rgba(255,255,255,.58);font-family:'Exo 2',sans-serif;font-size:.88rem;line-height:1.65">${r.c}</p></div>`).join('')}</div>
  </div>`;
}

function setRevStar(n){S.revRating=n;document.querySelectorAll('.r-star').forEach((b,i)=>b.classList.toggle('on',i<n));}
function submitRev(pid){
  if(!S.user){openAuth();return;}
  const txt=document.getElementById('rev-txt')?.value.trim();
  if(!txt){toast('Please write a comment','err');return;}
  if(!REV[pid])REV[pid]=[];
  REV[pid].unshift({u:S.user.name,r:S.revRating,c:txt,d:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})});
  const p=S.products.find(x=>x.id===pid);if(p)p.rCount++;
  toast('Review submitted! ⭐');renderReviews(p);
}

// ── CART ──
function addToCart(id, qty=1){
  const p=S.products.find(x=>x.id===id);if(!p)return;
  if(p.stock===0){toast('This item is out of stock','err');return;}
  const ex=S.cart.find(i=>i.id===id);
  if(ex){ex.qty=Math.min(ex.qty+qty,p.stock||99);toast(`${p.name} qty updated!`);}
  else{S.cart.push({id,name:p.name,price:p.price,img:(PROD_IMGS[id]||[])[0]||'',color:p.color,series:p.series,qty});toast(`${p.name} added to cart! 🛒`);}
  saveCart();updateCartBadge();openCart();
}

function removeCartItem(id){S.cart=S.cart.filter(i=>i.id!==id);saveCart();updateCartBadge();renderCartDrawer();}
function changeCartQty(id,d){
  const item=S.cart.find(i=>i.id===id);if(!item)return;
  const p=S.products.find(x=>x.id===id);
  item.qty=Math.max(1,Math.min(item.qty+d,p?.stock||99));
  saveCart();updateCartBadge();renderCartDrawer();
}
function saveCart(){localStorage.setItem('tnx_cart',JSON.stringify(S.cart));}
function updateCartBadge(){
  const count=S.cart.reduce((a,i)=>a+i.qty,0);
  const b=document.getElementById('cart-badge');if(b){b.style.display=count?'flex':'none';b.textContent=count;}
}
function openCart(){history.pushState({cart:true},"","#cart");document.getElementById('cart-ov').classList.add('open');document.getElementById('cart-dr').classList.add('open');renderCartDrawer();}
function closeCart(){document.getElementById('cart-ov').classList.remove('open');document.getElementById('cart-dr').classList.remove('open');}

function renderCartDrawer(){
  const list=document.getElementById('cart-body-list'),foot=document.getElementById('cart-footer'),lbl=document.getElementById('cart-count-lbl');
  const count=S.cart.reduce((a,i)=>a+i.qty,0);if(lbl)lbl.textContent=`${count} item${count!==1?'s':''}`;
  if(!S.cart.length){
    if(foot)foot.style.display='none';
    if(list)list.innerHTML=`<div class="cart-empty-msg"><div style="font-size:3rem;margin-bottom:8px">🛒</div><div style="font-family:'Orbitron',sans-serif;font-size:.76rem;letter-spacing:2px">YOUR CART IS EMPTY</div><button class="btn-n btn-sm" style="margin-top:14px" onclick="closeCart();goPage('products')"><span>Browse Products</span></button></div>`;
    return;
  }
  if(foot)foot.style.display='block';
  if(list)list.innerHTML=S.cart.map(item=>`
    <div class="c-item">
      <img class="c-img" src="${item.img}" alt="${item.name}" onerror="this.style.background='rgba(220,38,38,.12)';this.style.content='none'"/>
      <div class="c-info">
        <div class="c-name">${item.name}</div>
        <div class="c-sub">${item.series||''}</div>
        <div class="c-qty">
          <button class="q-btn" onclick="changeCartQty('${item.id}',-1)" aria-label="Decrease">−</button>
          <span class="q-val">${item.qty}</span>
          <button class="q-btn" onclick="changeCartQty('${item.id}',1)" aria-label="Increase">+</button>
        </div>
      </div>
      <span class="c-price">$${item.price*item.qty}</span>
      <button class="c-rm" onclick="removeCartItem('${item.id}')" aria-label="Remove item">🗑</button>
    </div>`).join('');
  const sub=S.cart.reduce((a,i)=>a+i.price*i.qty,0);
  const disc=S.discount;
  const ship=sub-disc>200?0:9.99;
  const total=sub-disc+ship;
  const cs=document.getElementById('c-sub');if(cs)cs.textContent='$'+sub;
  const csh=document.getElementById('c-ship');if(csh)csh.textContent=ship===0?'FREE':'$'+ship.toFixed(2);
  const ct=document.getElementById('c-total');if(ct)ct.textContent='$'+total.toFixed(2);
}

function applyPromo(){
  const code=document.getElementById('promo-in')?.value.trim().toUpperCase();
  if(code==='TOYNEXX10'){S.discount=Math.round(S.cart.reduce((a,i)=>a+i.price*i.qty,0)*0.1);renderCartDrawer();toast('10% discount applied! 🎉','ok');}
  else if(code==='WELCOME20'){S.discount=20;renderCartDrawer();toast('$20 discount applied! 🎉','ok');}
  else{toast('Invalid promo code','err');}
}

function wishToggle(id, btn){
  if(!S.user){openAuth();toast('Sign in to save items','err');return;}
  if(!S.user.wishlist)S.user.wishlist=[];
  const idx=S.user.wishlist.indexOf(id);
  if(idx>-1){S.user.wishlist.splice(idx,1);if(btn)btn.classList.remove('active');toast('Removed from wishlist');}
  else{S.user.wishlist.push(id);if(btn)btn.classList.add('active');toast('Added to wishlist ♡');}
  saveUsers();
}

// ── CHECKOUT ──
function renderCheckout(){
  if(!S.cart.length){goPage('home');return;}
  if(!S.user){openAuth();toast('Please sign in to checkout','err');return;}
  S.coStep=0;S.discount=S.discount||0;
  drawStepBar();drawCheckoutStep();
}

function drawStepBar(){
  const steps=['Shipping','Summary','Payment'];
  const el=document.getElementById('step-bar');if(!el)return;
  el.innerHTML=steps.map((s,i)=>`${i>0?`<div class="s-line ${i<=S.coStep?'done':''}"></div>`:''}<div class="s-dot ${i<S.coStep?'done':i===S.coStep?'active':''}${i>0?' ':''}">${i<S.coStep?'✓':i+1}</div>`).join('');
}

function drawCheckoutStep(){
  const sub=S.cart.reduce((a,i)=>a+i.price*i.qty,0);
  const disc=S.discount;
  const ship=(sub-disc)>200?0:9.99;
  const total=sub-disc+ship;
  const sumCardHTML=`
  <div class="co-card" style="position:sticky;top:90px">
    <div style="font-family:'Orbitron',sans-serif;font-size:.72rem;letter-spacing:3px;margin-bottom:18px;color:rgba(255,255,255,.42)">ORDER SUMMARY</div>
    ${S.cart.map(i=>`<div class="sum-item"><img class="sum-img" src="${i.img}" alt="${i.name}" onerror="this.style.display='none'"/><div style="flex:1;min-width:0"><div style="font-size:.85rem;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:'Exo 2',sans-serif">${i.name}</div><div style="font-size:.7rem;color:rgba(255,255,255,.3);font-family:'Exo 2',sans-serif">Qty: ${i.qty}</div></div><div style="font-family:'Orbitron',sans-serif;font-size:.88rem;color:#dc2626">$${i.price*i.qty}</div></div>`).join('')}
    <div style="border-top:1px solid rgba(255,255,255,.06);margin:14px 0;padding-top:14px">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:.85rem;font-family:'Exo 2',sans-serif"><span style="color:rgba(255,255,255,.38)">Subtotal</span><span>$${sub}</span></div>
      ${disc>0?`<div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:.85rem;font-family:'Exo 2',sans-serif"><span style="color:#22c55e">Discount</span><span style="color:#22c55e">-$${disc}</span></div>`:''}
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;font-size:.85rem;font-family:'Exo 2',sans-serif"><span style="color:rgba(255,255,255,.38)">Shipping</span><span style="color:${ship===0?'#22c55e':'#fff'}">${ship===0?'FREE':'$'+ship.toFixed(2)}</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:12px;border-top:1px solid rgba(255,255,255,.06)"><span style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:2px">TOTAL</span><span style="font-family:'Orbitron',sans-serif;font-size:1.1rem;color:#dc2626">$${total.toFixed(2)}</span></div>
    </div>
  </div>`;

  const body=document.getElementById('checkout-body');if(!body)return;

  if(S.coStep===0){
    const saved=S.user.addresses?.[0]||{};
    body.innerHTML=`<div class="co-grid">
    <div class="co-card">
      <div style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:3px;margin-bottom:20px">SHIPPING ADDRESS</div>
      <div class="f-row">
        <div class="f-group"><label class="f-label">Full Name *</label><input class="n-in" id="f-name" placeholder="Full Name" value="${saved.name||S.user.name||''}"/></div>
        <div class="f-group"><label class="f-label">Phone *</label><input class="n-in" id="f-phone" placeholder="+91 98765 43210" value="${saved.phone||''}"/></div>
      </div>
      <div class="f-group"><label class="f-label">Street Address *</label><input class="n-in" id="f-street" placeholder="House/Flat No, Street, Area" value="${saved.street||''}"/></div>
      <div class="f-row">
        <div class="f-group"><label class="f-label">City *</label><input class="n-in" id="f-city" placeholder="City" value="${saved.city||''}"/></div>
        <div class="f-group"><label class="f-label">State *</label><input class="n-in" id="f-state" placeholder="State" value="${saved.state||''}"/></div>
      </div>
      <div class="f-row">
        <div class="f-group"><label class="f-label">PIN Code *</label><input class="n-in" id="f-pin" placeholder="000000" value="${saved.pin||''}"/></div>
        <div class="f-group"><label class="f-label">Country</label><input class="n-in" id="f-country" placeholder="India" value="${saved.country||'India'}"/></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px">
        <input type="checkbox" id="f-save" style="accent-color:var(--p);width:16px;height:16px"/>
        <label for="f-save" style="font-family:'Exo 2',sans-serif;font-size:.8rem;color:rgba(255,255,255,.5);cursor:pointer">Save address for future orders</label>
      </div>
      <button class="btn-p" style="width:100%;padding:14px" onclick="nextCoStep()">CONTINUE TO SUMMARY →</button>
    </div>${sumCardHTML}</div>`;
  }
  else if(S.coStep===1){
    const a=S.coData.address;
    body.innerHTML=`<div class="co-grid">
    <div class="co-card">
      <div style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:3px;margin-bottom:20px">CONFIRM ORDER</div>
      <div style="background:rgba(220,38,38,.06);border:1px solid rgba(220,38,38,.14);border-radius:10px;padding:16px;margin-bottom:20px">
        <div style="font-size:.65rem;color:var(--p);letter-spacing:2px;font-family:'Exo 2',sans-serif;margin-bottom:8px">SHIP TO</div>
        <div style="font-size:.85rem;color:rgba(255,255,255,.65);font-family:'Exo 2',sans-serif;line-height:1.65">${a.name} • ${a.phone}<br>${a.street}, ${a.city}, ${a.state} ${a.pin}, ${a.country}</div>
        <span onclick="prevCoStep()" style="color:var(--p);font-size:.75rem;cursor:pointer;font-family:'Exo 2',sans-serif;margin-top:6px;display:inline-block;text-decoration:underline">✏ Edit Address</span>
      </div>
      ${S.cart.map(i=>`<div class="sum-item"><img class="sum-img" src="${i.img}" alt="${i.name}" onerror="this.style.display='none'"/><div style="flex:1;min-width:0"><div style="font-size:.88rem;color:#fff;font-family:'Exo 2',sans-serif">${i.name}</div><div style="font-size:.7rem;color:rgba(255,255,255,.32);font-family:'Exo 2',sans-serif">Qty: ${i.qty} × $${i.price}</div></div><div style="font-family:'Orbitron',sans-serif;font-size:.88rem;color:#dc2626">$${i.price*i.qty}</div></div>`).join('')}
      <div style="display:flex;gap:12px;margin-top:20px">
        <button class="btn-n" style="flex:.6;padding:12px" onclick="prevCoStep()"><span>← BACK</span></button>
        <button class="btn-p" style="flex:1;padding:12px" onclick="nextCoStep()">SELECT PAYMENT →</button>
      </div>
    </div>${sumCardHTML}</div>`;
  }
  else if(S.coStep===2){
    body.innerHTML=`<div class="co-grid">
    <div class="co-card">
      <div style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:3px;margin-bottom:20px">PAYMENT METHOD</div>
      ${[{k:'card',l:'Credit / Debit Card',i:'💳'},{k:'upi',l:'UPI (GPay / PhonePe)',i:'📱'},{k:'netbanking',l:'Net Banking',i:'🏦'},{k:'cod',l:'Cash on Delivery',i:'💵'}].map(m=>`
      <div class="pay-opt ${S.coData.payMethod===m.k?'active':''}" onclick="selPay('${m.k}')">
        <span style="font-size:1.3rem">${m.i}</span>
        <span style="font-family:'Exo 2',sans-serif;font-size:.9rem">${m.l}</span>
        <div class="pay-radio"><div class="pay-dot"></div></div>
      </div>`).join('')}
      ${S.coData.payMethod==='card'?`<div style="margin:14px 0;display:flex;flex-direction:column;gap:10px">
        <input class="n-in" placeholder="Card Number (1234 5678 9012 3456)" maxlength="19" oninput="this.value=this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim()"/>
        <div class="f-row"><input class="n-in" placeholder="MM / YY"/><input class="n-in" placeholder="CVV" type="password" maxlength="3"/></div>
        <input class="n-in" placeholder="Cardholder Name"/>
      </div>`:''}
      ${S.coData.payMethod==='upi'?`<div style="margin:14px 0"><input class="n-in" placeholder="UPI ID (e.g. yourname@upi)"/></div>`:''}
      <div style="display:flex;align-items:center;gap:7px;font-size:.72rem;color:rgba(255,255,255,.32);font-family:'Exo 2',sans-serif;margin-bottom:18px;padding:10px;background:rgba(34,197,94,.04);border-radius:8px;border:1px solid rgba(34,197,94,.12)"><span style="color:#22c55e;font-size:1rem">🔒</span>256-bit SSL encrypted. Your data is secure.</div>
      <div style="display:flex;gap:12px">
        <button class="btn-n" style="flex:.6;padding:12px" onclick="prevCoStep()"><span>← BACK</span></button>
        <button class="btn-p" id="place-order-btn" style="flex:1;padding:14px;font-size:.76rem;letter-spacing:3px" onclick="placeOrder(this)">PLACE ORDER — $${total.toFixed(2)}</button>
      </div>
    </div>${sumCardHTML}</div>`;
  }
}

function nextCoStep(){
  if(S.coStep===0){
    const vals=(['f-name','f-phone','f-street','f-city','f-state','f-pin']).map(id=>document.getElementById(id)?.value.trim());
    if(vals.some(v=>!v)){toast('Please fill all required fields','err');return;}
    S.coData.address={name:vals[0],phone:vals[1],street:vals[2],city:vals[3],state:vals[4],pin:vals[5],country:document.getElementById('f-country')?.value||'India'};
    if(document.getElementById('f-save')?.checked&&S.user){S.user.addresses=[S.coData.address];saveUsers();}
  }
  S.coStep=Math.min(2,S.coStep+1);drawStepBar();drawCheckoutStep();
}
function prevCoStep(){S.coStep=Math.max(0,S.coStep-1);drawStepBar();drawCheckoutStep();}
function selPay(k){S.coData.payMethod=k;drawCheckoutStep();}

function placeOrder(btn){
  if(btn){btn.disabled=true;btn.textContent='PROCESSING...';}
  setTimeout(()=>{
    const num='TNX'+Date.now().toString().slice(-8).toUpperCase();
    S.lastOrderNum=num;
    const sub=S.cart.reduce((a,i)=>a+i.price*i.qty,0);
    const ship=(sub-S.discount)>200?0:9.99;
    const order={
      id:num,orderNum:num,
      date:new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}),
      items:S.cart.map(i=>({...i})),
      address:{...S.coData.address},
      payMethod:S.coData.payMethod,
      sub,disc:S.discount,ship,
      total:parseFloat((sub-S.discount+ship).toFixed(2)),
      status:'Processing',steps:['Order Placed','Payment Confirmed'],
    };
    S.orders.push(order);
    localStorage.setItem('tnx_orders',JSON.stringify(S.orders));
    S.cart=[];S.discount=0;saveCart();updateCartBadge();
    const on=document.getElementById('suc-order-num');if(on)on.textContent='Order #'+num;
    goPage('success');toast('Order placed successfully! 🎉','ok');
  },2000);
}

// ── ORDERS ──
function renderOrders(){
  const SC={Processing:'#dc2626',Confirmed:'var(--b)',Shipped:'#ff8c00',Delivered:'#22c55e',Cancelled:'var(--pk)'};
  const el=document.getElementById('orders-list');if(!el)return;
  const myOrders=[...S.orders].reverse();
  if(!myOrders.length){
    el.innerHTML=`<div style="text-align:center;padding:70px 0"><div style="font-size:3.5rem;margin-bottom:18px">📦</div><div style="font-family:'Orbitron',sans-serif;color:rgba(255,255,255,.28);margin-bottom:20px;letter-spacing:2px">NO ORDERS YET</div><button class="btn-p" onclick="goPage('products')">START SHOPPING</button></div>`;
    return;
  }
  el.innerHTML=myOrders.map(o=>`
  <div class="ord-card" onclick="showOrderDetail('${o.id}')">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-family:'Orbitron',sans-serif;font-size:.82rem;letter-spacing:2px;color:var(--p);margin-bottom:4px">${o.orderNum}</div>
        <div style="font-size:.78rem;color:rgba(255,255,255,.35);font-family:'Exo 2',sans-serif">${o.date} • ${o.items.length} item(s)</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px">
        <div style="font-family:'Orbitron',sans-serif;font-size:.92rem;color:#dc2626">$${o.total}</div>
        <span class="st-badge" style="background:${SC[o.status]||'var(--p)'}18;color:${SC[o.status]||'var(--p)'};border:1px solid ${SC[o.status]||'var(--p)'}28">${o.status}</span>
      </div>
    </div>
  </div>`).join('');
}

function showOrderDetail(id){
  const o=S.orders.find(x=>x.id===id);if(!o)return;
  const el=document.getElementById('orders-list');if(!el)return;
  const TRACK=['Order Placed','Confirmed','Processing','Shipped','Delivered'];
  const done=Math.max(o.steps?.length||1,1);
  el.innerHTML=`
  <button onclick="renderOrders()" class="btn-n btn-sm" style="margin-bottom:20px"><span>← All Orders</span></button>
  <div style="background:rgba(12,6,28,.82);border:1px solid rgba(220,38,38,.14);border-radius:16px;padding:26px;margin-bottom:18px">
    <div style="font-family:'Orbitron',sans-serif;font-size:.82rem;letter-spacing:2px;color:var(--p);margin-bottom:4px">${o.orderNum}</div>
    <div style="font-size:.75rem;color:rgba(255,255,255,.32);font-family:'Exo 2',sans-serif;margin-bottom:24px">${o.date} • via ${o.payMethod?.toUpperCase()}</div>
    <div style="display:flex;justify-content:space-between;position:relative">
      <div style="position:absolute;top:15px;left:5%;right:5%;height:2px;background:rgba(255,255,255,.06)"><div style="height:100%;background:linear-gradient(90deg,var(--p),var(--b));width:${Math.min(done/TRACK.length*100,100)}%;transition:width 1s"></div></div>
      ${TRACK.map((s,i)=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;z-index:1">
        <div style="width:30px;height:30px;border-radius:50%;background:${i<done?'linear-gradient(135deg,var(--p),var(--b))':'rgba(255,255,255,.06)'};display:flex;align-items:center;justify-content:center;font-size:.72rem;box-shadow:${i<done?'0 0 12px rgba(220,38,38,.4)':'none'}">${i<done?'✓':i+1}</div>
        <div style="font-size:.58rem;color:${i<done?'rgba(255,255,255,.6)':'rgba(255,255,255,.2)'};text-align:center;font-family:'Exo 2',sans-serif">${s}</div>
      </div>`).join('')}
    </div>
  </div>
  <div style="background:rgba(12,6,28,.82);border:1px solid rgba(220,38,38,.12);border-radius:14px;padding:22px;margin-bottom:14px">
    ${o.items.map(i=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.04)">
      <img src="${i.img}" alt="${i.name}" style="width:46px;height:46px;border-radius:8px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'"/>
      <div style="flex:1;min-width:0"><div style="font-size:.88rem;color:#fff;font-family:'Exo 2',sans-serif">${i.name}</div><div style="font-size:.7rem;color:rgba(255,255,255,.3);font-family:'Exo 2',sans-serif">Qty: ${i.qty}</div></div>
      <div style="font-family:'Orbitron',sans-serif;color:#dc2626">$${i.price*i.qty}</div>
    </div>`).join('')}
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px">
    <div style="background:rgba(12,6,28,.82);border:1px solid rgba(220,38,38,.12);border-radius:12px;padding:18px">
      <div style="font-size:.62rem;color:var(--p);letter-spacing:2px;font-family:'Exo 2',sans-serif;margin-bottom:10px;text-transform:uppercase">Shipping Address</div>
      <div style="font-size:.83rem;color:rgba(255,255,255,.6);font-family:'Exo 2',sans-serif;line-height:1.75">${o.address?.name||''}<br>${o.address?.street||''}<br>${o.address?.city||''}, ${o.address?.state||''} ${o.address?.pin||''}</div>
    </div>
    <div style="background:rgba(12,6,28,.82);border:1px solid rgba(220,38,38,.12);border-radius:12px;padding:18px">
      <div style="font-size:.62rem;color:var(--p);letter-spacing:2px;font-family:'Exo 2',sans-serif;margin-bottom:10px;text-transform:uppercase">Payment Summary</div>
      ${o.disc>0?`<div style="display:flex;justify-content:space-between;font-size:.8rem;font-family:'Exo 2',sans-serif;color:rgba(255,255,255,.5);margin-bottom:6px"><span>Discount</span><span style="color:#22c55e">-$${o.disc}</span></div>`:''}
      <div style="display:flex;justify-content:space-between;font-size:.8rem;font-family:'Exo 2',sans-serif;color:rgba(255,255,255,.5);margin-bottom:6px"><span>Shipping</span><span style="color:${o.ship===0?'#22c55e':'#fff'}">${o.ship===0?'FREE':'$'+o.ship}</span></div>
      <div style="font-family:'Orbitron',sans-serif;font-size:1.2rem;color:#dc2626;margin-top:8px">$${o.total}</div>
    </div>
  </div>`;
}

// ── AUTH ──
let authMode='login';
function openAuth(){document.getElementById('auth-ov').classList.add('open');}
function closeAuth(){document.getElementById('auth-ov').classList.remove('open');}
function closeAuthBg(e){if(e.target===document.getElementById('auth-ov'))closeAuth();}
function setAuthTab(tab){
  authMode=tab;
  document.getElementById('at-login').classList.toggle('on',tab==='login');
  document.getElementById('at-reg').classList.toggle('on',tab==='register');
  document.getElementById('auth-sub-txt').textContent=tab==='login'?'Welcome Back, Collector':'Join The Universe';
  renderAuthForm(tab);
}
function renderAuthForm(tab){
  authMode=tab;
  document.getElementById('auth-form').innerHTML=`
    ${tab==='register'?`<div class="a-field"><label>Full Name</label><div class="a-wrap"><span class="a-ico">👤</span><input class="a-in" id="a-name" placeholder="Your Full Name" type="text" autocomplete="name"/></div></div>`:''}
    <div class="a-field"><label>Email Address</label><div class="a-wrap"><span class="a-ico">✉</span><input class="a-in" id="a-email" placeholder="your@email.com" type="email" autocomplete="email"/></div></div>
    <div class="a-field"><label>Password</label><div class="a-wrap"><span class="a-ico">🔒</span><input class="a-in" id="a-pass" placeholder="••••••••" type="password" autocomplete="${tab==='login'?'current-password':'new-password'}"/><button class="a-eye" type="button" onclick="toggleEye()" id="eye-btn">👁</button></div></div>
    <button class="btn-p" style="width:100%;padding:14px;margin-top:8px" onclick="doAuth()" type="button">${tab==='login'?'SIGN IN':'CREATE ACCOUNT'}</button>
    <div class="auth-note">🔐 Admin portal is private and not publicly accessible</div>`;
}
function toggleEye(){const i=document.getElementById('a-pass'),b=document.getElementById('eye-btn');if(!i)return;i.type=i.type==='password'?'text':'password';b.textContent=i.type==='password'?'👁':'🙈';}

function doAuth(){
  const email=document.getElementById('a-email')?.value.trim().toLowerCase();
  const pass=document.getElementById('a-pass')?.value;
  if(!email||!pass){toast('Please fill all fields','err');return;}

  // Check admin
  if(email===ADMIN.email.toLowerCase()&&pass===ADMIN.password){
    S.user={...ADMIN,wishlist:[],addresses:[]};
    toast(`Welcome, ${ADMIN.name}! 🔑`,'ok');closeAuth();updateUserUI();return;
  }

  if(authMode==='login'){
    const u=S.users.find(x=>x.email===email&&x.pw===pass);
    if(!u){toast('Invalid email or password','err');return;}
    S.user=u;toast(`Welcome back, ${u.name.split(' ')[0]}! 🎌`,'ok');closeAuth();updateUserUI();
  } else {
    const name=document.getElementById('a-name')?.value.trim();
    if(!name){toast('Please enter your name','err');return;}
    if(name.length<2){toast('Name too short','err');return;}
    if(pass.length<6){toast('Password must be at least 6 characters','err');return;}
    if(email===ADMIN.email.toLowerCase()){toast('This email is reserved','err');return;}
    if(S.users.find(x=>x.email===email)){toast('Email already registered','err');return;}
    const u={id:'u'+Date.now(),name,email,pw:pass,role:'user',avatar:name[0].toUpperCase(),wishlist:[],addresses:[],joined:new Date().toLocaleDateString('en-IN',{month:'short',year:'numeric'})};
    S.users.push(u);saveUsers();S.user=u;
    toast(`Welcome to TOYNEXX, ${name.split(' ')[0]}! 🚀`,'ok');closeAuth();updateUserUI();
  }
}

function saveUsers(){localStorage.setItem('tnx_users',JSON.stringify(S.users));}

function updateUserUI(){
  const ab=document.getElementById('auth-nav-btn'),ub=document.getElementById('user-nav-btn');
  if(S.user){ab.style.display='none';ub.textContent=S.user.avatar||'👤';ub.title=S.user.name;}
  else{ab.style.display='';ub.textContent='👤';ub.title='Account';}
}

function handleUserBtn(){
  if(!S.user){openAuth();return;}
  document.getElementById('user-drop')?.remove();
  const menu=document.createElement('div');menu.id='user-drop';
  menu.style.cssText='position:fixed;top:66px;right:calc(5% + 40px);background:rgba(4,2,12,.99);backdrop-filter:blur(20px);border:1px solid rgba(220,38,38,.2);border-radius:14px;padding:8px;z-index:2500;min-width:200px;animation:popIn .2s ease;box-shadow:0 8px 40px rgba(0,0,0,.7)';
  const links=[['👤','My Profile','dashboard'],['📦','My Orders','orders'],...(S.user.role==='admin'?[['⚙️','Admin Panel','admin']]:[])] ;
  menu.innerHTML=`<div style="padding:12px 14px 12px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px">
    <div style="font-weight:700;color:#fff;margin-bottom:2px;font-family:'Exo 2',sans-serif">${S.user.name}</div>
    <div style="font-size:.7rem;color:rgba(255,255,255,.3);font-family:'Exo 2',sans-serif">${S.user.email}</div>
    ${S.user.role==='admin'?`<span style="font-size:.55rem;background:rgba(220,38,38,.12);color:#dc2626;border:1px solid rgba(220,38,38,.25);padding:2px 8px;border-radius:10px;font-family:'Exo 2',sans-serif;letter-spacing:1px;display:inline-block;margin-top:6px">OWNER</span>`:''}
  </div>
  ${links.map(([ic,lb,pg])=>`<div onclick="goPage('${pg}');this.closest('#user-drop').remove()" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:8px;cursor:pointer;font-family:'Exo 2',sans-serif;font-size:.82rem;color:rgba(255,255,255,.65);transition:all .2s" onmouseover="this.style.background='rgba(220,38,38,.08)';this.style.color='#fff'" onmouseout="this.style.background='none';this.style.color='rgba(255,255,255,.65)'">${ic} ${lb}</div>`).join('')}
  <div style="border-top:1px solid rgba(255,255,255,.06);margin:4px 0"></div>
  <div onclick="doLogout();this.closest('#user-drop').remove()" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:8px;cursor:pointer;color:var(--pk);font-family:'Exo 2',sans-serif;font-size:.82rem;transition:background .2s" onmouseover="this.style.background='rgba(212,175,55,.08)'" onmouseout="this.style.background='none'">🚪 Sign Out</div>`;
  document.body.appendChild(menu);
  setTimeout(()=>document.addEventListener('click',()=>{document.getElementById('user-drop')?.remove();},{once:true}),100);
}

function doLogout(){S.user=null;toast('Signed out successfully');updateUserUI();goPage('home');}

// ── DASHBOARD ──
function renderDashboard(){
  if(!S.user){openAuth();return;}
  const dp=document.getElementById('dash-profile');
  if(dp)dp.innerHTML=`<div class="dash-prof"><div class="dash-av">${S.user.avatar}</div><div style="flex:1"><div style="font-family:'Orbitron',sans-serif;font-size:1.15rem;font-weight:900;margin-bottom:4px">${S.user.name}</div><div style="color:rgba(255,255,255,.38);font-family:'Exo 2',sans-serif;font-size:.85rem;margin-bottom:10px">${S.user.email}</div>${S.user.joined?`<div style="color:rgba(255,255,255,.25);font-family:'Exo 2',sans-serif;font-size:.72rem;margin-bottom:10px">Member since ${S.user.joined}</div>`:''}<span style="padding:3px 12px;border-radius:20px;font-size:.62rem;letter-spacing:2px;font-family:'Exo 2',sans-serif;font-weight:700;background:${S.user.role==='admin'?'rgba(220,38,38,.14)':'rgba(220,38,38,.14)'};color:${S.user.role==='admin'?'#dc2626':'var(--p)'};border:1px solid ${S.user.role==='admin'?'rgba(220,38,38,.28)':'rgba(220,38,38,.28)'};text-transform:uppercase">${S.user.role==='admin'?'OWNER':'COLLECTOR'}</span></div><div style="display:flex;gap:10px;flex-wrap:wrap">${S.user.role==='admin'?`<button class="btn-n btn-sm" onclick="goPage('admin')"><span>Admin Panel</span></button>`:''}<button onclick="doLogout()" style="padding:8px 18px;border:1px solid rgba(212,175,55,.28);background:none;color:var(--pk);border-radius:6px;cursor:pointer;font-family:'Exo 2',sans-serif;font-size:.8rem">Sign Out</button></div></div>`;
  const dt=document.getElementById('dash-tiles');
  if(dt)dt.innerHTML=[['📦','My Orders','orders'],['❤️','Wishlist ('+((S.user.wishlist||[]).length)+')',' '],['📍','Saved Addresses',''],['⚙️','Settings','']].map(([ic,lb,pg])=>`<div class="d-tile" onclick="${pg?`goPage('${pg}')`:''}"><div style="font-size:2rem;margin-bottom:10px">${ic}</div><div style="font-family:'Exo 2',sans-serif;font-size:.78rem;color:rgba(255,255,255,.58);letter-spacing:1px">${lb}</div></div>`).join('');
  const do_=document.getElementById('dash-orders');
  const recent=[...S.orders].reverse().slice(0,3);
  if(do_)do_.innerHTML=recent.length?`<div style="font-family:'Orbitron',sans-serif;font-size:.78rem;letter-spacing:3px;margin-bottom:14px;color:rgba(255,255,255,.4)">RECENT ORDERS</div>${recent.map(o=>`<div onclick="goPage('orders')" style="background:rgba(12,6,28,.8);border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:14px 18px;margin-bottom:10px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .2s" onmouseover="this.style.borderColor='rgba(220,38,38,.28)'" onmouseout="this.style.borderColor='rgba(255,255,255,.05)'"><div><div style="font-family:'Orbitron',sans-serif;font-size:.75rem;color:var(--p);margin-bottom:4px">${o.orderNum}</div><div style="font-size:.72rem;color:rgba(255,255,255,.3);font-family:'Exo 2',sans-serif">${o.date} • ${o.items.length} items</div></div><div style="font-family:'Orbitron',sans-serif;color:#dc2626">$${o.total}</div></div>`).join('')}`:'';
}

// ── ADMIN ──
function setAdminTab(tab){
  S.adminTab=tab;
  ['dashboard','products','orders','users'].forEach(t=>{const el=document.getElementById('al-'+t);if(el)el.classList.toggle('on',t===tab);});
  renderAdminTab(tab);
}

function renderAdminTab(tab){
  const el=document.getElementById('adm-content');if(!el)return;
  if(tab==='dashboard'){
    const rev=S.orders.reduce((a,o)=>a+o.total,0);
    el.innerHTML=`
    <div class="stat-cards">
      ${[{n:S.products.length,l:'Products',c:'var(--p)'},{n:S.orders.length,l:'Orders',c:'var(--b)'},{n:S.users.length,l:'Users',c:'var(--pk)'},{n:'$'+rev.toFixed(0),l:'Revenue',c:'#dc2626'}].map(s=>`<div class="stat-card"><div style="font-family:'Orbitron',sans-serif;font-size:1.7rem;font-weight:900;color:${s.c};margin-bottom:4px">${s.n}</div><div style="font-size:.65rem;color:rgba(255,255,255,.38);letter-spacing:2px;font-family:'Exo 2',sans-serif;text-transform:uppercase">${s.l}</div></div>`).join('')}
    </div>
    <div style="margin-bottom:22px">
      <div style="font-family:'Orbitron',sans-serif;font-size:.72rem;letter-spacing:3px;margin-bottom:12px;color:rgba(255,255,255,.4)">RECENT ORDERS</div>
      ${S.orders.slice(-5).reverse().map(o=>`<div style="display:flex;justify-content:space-between;padding:10px;border-bottom:1px solid rgba(255,255,255,.04);font-family:'Exo 2',sans-serif;font-size:.82rem;align-items:center">
        <span style="color:var(--p);font-family:'Orbitron',sans-serif;font-size:.75rem">${o.orderNum}</span>
        <span style="color:rgba(255,255,255,.5)">${o.date}</span>
        <span style="color:#dc2626;font-family:'Orbitron',sans-serif">$${o.total}</span>
        <span style="color:#22c55e">${o.status}</span>
      </div>`).join('')}
      ${!S.orders.length?`<div style="text-align:center;padding:20px;color:rgba(255,255,255,.25);font-family:'Exo 2',sans-serif">No orders yet</div>`:''}
    </div>
    <div>
      <div style="font-family:'Orbitron',sans-serif;font-size:.72rem;letter-spacing:3px;margin-bottom:12px;color:rgba(255,255,255,.4)">TOP SELLING PRODUCTS</div>
      ${[...S.products].sort((a,b)=>b.sold-a.sold).slice(0,5).map(p=>`<div style="display:flex;align-items:center;gap:12px;padding:9px;border-bottom:1px solid rgba(255,255,255,.04)">
        <img src="${(PROD_IMGS[p.id]||[])[0]}" alt="${p.name}" style="width:38px;height:38px;border-radius:8px;object-fit:cover" onerror="this.style.display='none'"/>
        <span style="flex:1;font-family:'Exo 2',sans-serif;font-size:.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</span>
        <span style="font-family:'Orbitron',sans-serif;color:#dc2626;font-size:.82rem;flex-shrink:0">₹${p.price}</span>
        <span style="font-size:.72rem;color:rgba(255,255,255,.35);font-family:'Exo 2',sans-serif;flex-shrink:0">${p.sold} sold</span>
      </div>`).join('')}
    </div>`;
  }
  else if(tab==='products'){
    el.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><div style="font-family:'Orbitron',sans-serif;font-size:.75rem;letter-spacing:3px;color:rgba(255,255,255,.5)">ALL PRODUCTS (${S.products.length})</div><button class="btn-p btn-sm" onclick="openProdModal(null)">+ Add Product</button></div>
    <div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th>Actions</th></tr></thead><tbody>
    ${S.products.map(p=>`<tr>
      <td><div style="display:flex;align-items:center;gap:10px"><img src="${(PROD_IMGS[p.id]||[])[0]}" style="width:36px;height:36px;border-radius:6px;object-fit:cover" onerror="this.style.display='none'"/><span>${p.name}</span></div></td>
      <td><span style="text-transform:capitalize;color:${p.color||'var(--p)'}">${p.cat}</span></td>
      <td><span style="font-family:'Orbitron',sans-serif;color:#dc2626">₹${p.price}</span></td>
      <td><span style="color:${p.stock<10?'var(--pk)':'#22c55e'}">${p.stock}</span></td>
      <td>${p.sold}</td>
      <td><div style="display:flex;gap:6px"><button class="tbl-btn tbl-edit" onclick="openProdModal('${p.id}')">Edit</button><button class="tbl-btn tbl-del" onclick="delProd('${p.id}')">Delete</button></div></td>
    </tr>`).join('')}
    </tbody></table></div>`;
  }
  else if(tab==='orders'){
    el.innerHTML=`<div style="font-family:'Orbitron',sans-serif;font-size:.75rem;letter-spacing:3px;color:rgba(255,255,255,.5);margin-bottom:18px">ALL ORDERS (${S.orders.length})</div>
    <div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>Order #</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th><th>Update</th></tr></thead><tbody>
    ${[...S.orders].reverse().map(o=>`<tr>
      <td style="font-family:'Orbitron',sans-serif;color:var(--p);font-size:.75rem">${o.orderNum}</td>
      <td style="white-space:nowrap">${o.date}</td>
      <td>${o.items.length}</td>
      <td style="font-family:'Orbitron',sans-serif;color:#dc2626">$${o.total}</td>
      <td><span style="color:${o.status==='Delivered'?'#22c55e':o.status==='Cancelled'?'var(--pk)':'#dc2626'}">${o.status}</span></td>
      <td><select onchange="updOrderStatus('${o.id}',this.value)" style="background:rgba(12,6,28,.9);border:1px solid rgba(220,38,38,.2);border-radius:6px;color:#fff;font-family:'Exo 2',sans-serif;font-size:.75rem;padding:4px 8px;outline:none;cursor:pointer">
        ${['Processing','Confirmed','Shipped','Delivered','Cancelled'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
      </select></td>
    </tr>`).join('')}
    ${!S.orders.length?`<tr><td colspan="6" style="text-align:center;padding:30px;color:rgba(255,255,255,.3)">No orders yet</td></tr>`:''}
    </tbody></table></div>`;
  }
  else if(tab==='users'){
    el.innerHTML=`<div style="font-family:'Orbitron',sans-serif;font-size:.75rem;letter-spacing:3px;color:rgba(255,255,255,.5);margin-bottom:18px">ALL USERS (${S.users.length})</div>
    <div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>User</th><th>Email</th><th>Joined</th><th>Wishlist</th><th>Orders</th></tr></thead><tbody>
    ${S.users.length?S.users.map(u=>`<tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--p),var(--b));display:flex;align-items:center;justify-content:center;font-size:.85rem;font-family:'Orbitron',sans-serif;flex-shrink:0">${u.avatar||u.name[0]}</div>${u.name}</div></td>
      <td>${u.email}</td>
      <td>${u.joined||'—'}</td>
      <td>${u.wishlist?.length||0}</td>
      <td>${S.orders.filter(o=>o.userId===u.id).length}</td>
    </tr>`).join(''):`<tr><td colspan="5" style="text-align:center;padding:30px;color:rgba(255,255,255,.3)">No registered users yet</td></tr>`}
    </tbody></table></div>`;
  }
}

function updOrderStatus(id,status){
  const o=S.orders.find(x=>x.id===id);if(!o)return;
  o.status=status;localStorage.setItem('tnx_orders',JSON.stringify(S.orders));toast('Order status updated to '+status,'ok');
}

function delProd(id){
  if(!confirm('Delete this product? This cannot be undone.'))return;
  S.products=S.products.filter(p=>p.id!==id);S.filtered=[...S.products];
  toast('Product deleted');renderAdminTab('products');renderHome();
}

function openProdModal(id){
  S.editingProd=id?S.products.find(p=>p.id===id):null;
  document.getElementById('pm-title').textContent=id?'EDIT PRODUCT':'ADD PRODUCT';
  const p=S.editingProd||{};
  document.getElementById('pm-form').innerHTML=`<div style="display:flex;flex-direction:column;gap:12px">
    <div class="f-row"><div><label class="f-label">Name *</label><input class="n-in" id="pm-name" value="${p.name||''}" placeholder="Product name"/></div><div><label class="f-label">Price *</label><input class="n-in" id="pm-price" type="number" value="${p.price||''}" placeholder="0"/></div></div>
    <div class="f-row"><div><label class="f-label">Original Price</label><input class="n-in" id="pm-orig" type="number" value="${p.orig||''}" placeholder="0 (optional)"/></div><div><label class="f-label">Stock</label><input class="n-in" id="pm-stock" type="number" value="${p.stock||0}"/></div></div>
    <div><label class="f-label">Description</label><textarea class="n-in" id="pm-desc">${p.desc||''}</textarea></div>
    <div class="f-row">
      <div><label class="f-label">Category *</label><select class="n-in" id="pm-cat" style="cursor:pointer">${['anime','superheroes','cars','limited'].map(c=>`<option value="${c}" ${p.cat===c?'selected':''}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join('')}</select></div>
      <div><label class="f-label">Badge</label><select class="n-in" id="pm-badge" style="cursor:pointer">${['','HOT','NEW','RARE','EXCL','SALE'].map(b=>`<option value="${b}" ${p.badge===b?'selected':''}>${b||'None'}</option>`).join('')}</select></div>
    </div>
    <div class="f-row"><div><label class="f-label">Brand</label><input class="n-in" id="pm-brand" value="${p.brand||''}"/></div><div><label class="f-label">Scale</label><input class="n-in" id="pm-scale" value="${p.scale||''}"/></div></div>
    <div class="f-row"><div><label class="f-label">Series</label><input class="n-in" id="pm-series" value="${p.series||''}"/></div><div><label class="f-label">Accent Color</label><input class="n-in" id="pm-color" value="${p.color||'var(--p)'}" placeholder="var(--p)"/></div></div>
    <div class="f-row"><div><label class="f-label">Rating (0-5)</label><input class="n-in" id="pm-rating" type="number" step=".1" min="0" max="5" value="${p.rating||4.5}"/></div><div style="display:flex;align-items:center;gap:20px;padding-top:24px"><label style="display:flex;align-items:center;gap:6px;font-family:'Exo 2',sans-serif;font-size:.8rem;color:rgba(255,255,255,.5);cursor:pointer"><input type="checkbox" id="pm-feat" ${p.feat?'checked':''} style="accent-color:var(--p)"/> Featured</label><label style="display:flex;align-items:center;gap:6px;font-family:'Exo 2',sans-serif;font-size:.8rem;color:rgba(255,255,255,.5);cursor:pointer"><input type="checkbox" id="pm-trend" ${p.trend?'checked':''} style="accent-color:var(--p)"/> Trending</label></div></div>
    <div style="display:flex;gap:10px;margin-top:6px">
      <button class="btn-p" style="flex:1;padding:13px" onclick="saveProd()">SAVE PRODUCT</button>
      <button class="btn-n" style="flex:.5;padding:13px" onclick="closeProdModal()"><span>CANCEL</span></button>
    </div>
  </div>`;
  document.getElementById('prod-modal').classList.add('open');
}

function closeProdModal(){document.getElementById('prod-modal').classList.remove('open');}
function saveProd(){
  const name=document.getElementById('pm-name')?.value.trim();
  const price=parseFloat(document.getElementById('pm-price')?.value);
  if(!name||!price){toast('Name and price are required','err');return;}
  const data={name,price,orig:parseFloat(document.getElementById('pm-orig')?.value)||null,stock:parseInt(document.getElementById('pm-stock')?.value)||0,desc:document.getElementById('pm-desc')?.value||'',cat:document.getElementById('pm-cat')?.value,badge:document.getElementById('pm-badge')?.value,brand:document.getElementById('pm-brand')?.value,scale:document.getElementById('pm-scale')?.value,series:document.getElementById('pm-series')?.value,color:document.getElementById('pm-color')?.value||'var(--p)',rating:parseFloat(document.getElementById('pm-rating')?.value)||4.5,feat:document.getElementById('pm-feat')?.checked,trend:document.getElementById('pm-trend')?.checked};
  if(S.editingProd){Object.assign(S.editingProd,data);toast('Product updated! ✓','ok');}
  else{data.id='p'+Date.now();data.sold=0;data.rCount=0;S.products.push(data);toast('Product added! ✓','ok');}
  closeProdModal();renderAdminTab('products');S.filtered=[...S.products];renderHome();
}

// ── HERO PARALLAX ──
function setupHeroParallax(){
  const hero=document.getElementById('hero');if(!hero)return;
  hero.addEventListener('mousemove',e=>{
    const r=hero.getBoundingClientRect();
    const mx=(e.clientX-r.left-r.width/2)/r.width;
    const my=(e.clientY-r.top-r.height/2)/r.height;
    const shelf=document.getElementById('hero-shelf');if(shelf)shelf.style.transform=`translate(${mx*-8}px,${my*-5}px)`;
    document.querySelectorAll('.char-side').forEach((c,i)=>c.style.transform=`translateX(${mx*(i===0?8:-8)}px)`);
  });
  hero.addEventListener('mouseleave',()=>{
    const shelf=document.getElementById('hero-shelf');if(shelf)shelf.style.transform='none';
    document.querySelectorAll('.char-side').forEach(c=>c.style.transform='none');
  });
}

// ── NEWSLETTER ──
function doNewsletter(){
  const email=document.getElementById('nl-email')?.value.trim();
  if(!email||!email.includes('@')||!email.includes('.')){toast('Please enter a valid email','err');return;}
  document.getElementById('nl-email').value='';
  toast('Subscribed! First drops incoming 🚀','ok');
}

// ── MOBILE MENU ──
function toggleMob(){document.getElementById('mob-menu').classList.toggle('open');}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');}

// ── TOAST ──
function toast(msg,type=''){
  const wrap=document.getElementById('toast-wrap');if(!wrap)return;
  const el=document.createElement('div');el.className='toast'+(type?' '+type:'');el.textContent=msg;
  wrap.appendChild(el);
  setTimeout(()=>{el.style.transition='all .3s';el.style.opacity='0';el.style.transform='translateY(8px)';setTimeout(()=>el.remove(),320);},2800);
}

// ── START ──
window.addEventListener('DOMContentLoaded',init);