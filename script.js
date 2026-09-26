(() => {
  const grid = document.querySelector('#productGrid');
  const count = document.querySelector('#count');
  const queryState = document.querySelector('#queryState');
  const empty = document.querySelector('#emptyState');
  const searchPanel = document.querySelector('#searchPanel');
  const searchInput = document.querySelector('#searchInput');
  const searchToggle = document.querySelector('#searchToggle');
  const clearSearch = document.querySelector('#clearSearch');
  const gridToggle = document.querySelector('#gridToggle');
  let products = [];

  const palettes = {
    'Stationery':['#1e4164','#f1efe8'],'Food & Drink':['#c14b32','#fff3d8'],'Daily Goods':['#8f5d3f','#fff8e9'],
    'Household':['#3f777d','#f1f5e9'],'Electronics':['#343a49','#eef0f4'],'Tools':['#b56732','#fff0d7'],
    'Kitchen':['#b9a26a','#25231d'],'Furniture':['#6b5a4b','#f1e7d7'],'Clothing':['#435d78','#f1f2ed'],
    'Hygiene':['#7891a1','#fff7ef'],'Storage':['#518a7a','#f4f0dc'],'Lighting':['#c38c32','#292821'],'Others':['#676767','#fff']
  };
  const initials = (name) => name.replace(/[^A-Za-z0-9]/g,' ').trim().split(/\s+/).slice(0,3).map(x=>x[0]).join('').toUpperCase() || 'SC';
  // Keep image retrieval separate from rendering so an approved API/affiliate
  // adapter can replace this resolver without changing the tile component.
  const resolveImageUrl = (product) => product.imageUrl || '';
  const matches = (p, q) => !q || [p.name,p.brand,p.category,p.country].join(' ').toLowerCase().includes(q.toLowerCase());
  function render(){
    const q = searchInput.value.trim();
    const visible = products.filter(p=>matches(p,q));
    grid.replaceChildren();
    visible.forEach(p=>{
      const tile=document.createElement(p.amazonUrl?'a':'article');
      tile.className='product-tile'; tile.dataset.id=p.id;
      if(p.amazonUrl){tile.href=p.amazonUrl;tile.target='_blank';tile.rel='sponsored noopener noreferrer'}
      const [bg,fg]=palettes[p.category]||palettes.Others;
      const imageUrl = resolveImageUrl(p);
      if(imageUrl){const img=document.createElement('img');img.className='product-image';img.loading='lazy';img.src=imageUrl;img.alt=`${p.name} — ${p.brand}`;tile.append(img)}
      else {const ph=document.createElement('div');ph.className='product-placeholder';ph.style.setProperty('--placeholder',bg);ph.style.setProperty('--placeholder-ink',fg);ph.setAttribute('aria-label',`${p.name} placeholder`);const s=document.createElement('span');s.textContent=initials(p.name);ph.append(s);tile.append(ph)}
      const info=document.createElement('div');info.className='tile-info';
      info.innerHTML=`<span class="tile-id">${p.id}</span><span class="tile-name"></span><span class="tile-brand"></span><span class="tile-description"></span>${p.year?`<span class="tile-year">${p.year}</span>`:''}`;
      info.querySelector('.tile-name').textContent=p.name; info.querySelector('.tile-brand').textContent=p.brand; info.querySelector('.tile-description').textContent=p.description; tile.append(info); grid.append(tile);
    });
    count.textContent=`${visible.length} ${visible.length===1?'object':'objects'}`;
    queryState.textContent=q?`/ ${q}`:''; empty.hidden=visible.length!==0;
  }
  searchToggle.addEventListener('click',()=>{const open=searchPanel.hidden;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));if(open)searchInput.focus()});
  clearSearch.addEventListener('click',()=>{searchInput.value='';render();searchInput.focus()});
  searchInput.addEventListener('input',render);
  gridToggle.addEventListener('click',()=>{document.body.classList.toggle('dense');gridToggle.setAttribute('aria-pressed',String(document.body.classList.contains('dense')))});
  fetch('products.json').then(r=>{if(!r.ok)throw new Error('products.json unavailable');return r.json()}).then(data=>{products=data;render()}).catch(()=>{count.textContent='catalog unavailable';empty.hidden=false});
})();
