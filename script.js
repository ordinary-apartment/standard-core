(() => {
  const grid = document.querySelector('#productGrid');
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
  const isSafeHttpUrl = (value) => {
    if (!value || typeof value !== 'string') return false;
    try { return /^https?:$/.test(new URL(value, window.location.href).protocol); }
    catch { return false; }
  };
  // Keep image retrieval separate from rendering so an approved API/affiliate
  // adapter can replace this resolver without changing the tile component.
  const resolveImageUrl = (product) => isSafeHttpUrl(product.imageUrl) ? product.imageUrl : '';
  const resolveProductUrl = (product) => [product.affiliateUrl, product.amazonUrl, product.productUrl]
    .find(isSafeHttpUrl) || '';
  const createPlaceholder = (product, bg, fg) => {
    const placeholder=document.createElement('div');
    placeholder.className='product-placeholder';
    placeholder.style.setProperty('--placeholder',bg);
    placeholder.style.setProperty('--placeholder-ink',fg);
    placeholder.setAttribute('aria-label',`${product.name} placeholder`);
    const initialsNode=document.createElement('span');
    initialsNode.textContent=initials(product.name);
    placeholder.append(initialsNode);
    return placeholder;
  };
  const matches = (p, q) => !q || [p.name,p.brand,p.category,p.country].join(' ').toLowerCase().includes(q.toLowerCase());
  function render(){
    const q = searchInput.value.trim();
    const visible = products.filter(p=>matches(p,q));
    grid.replaceChildren();
    visible.forEach(p=>{
      const productUrl = resolveProductUrl(p);
      const tile=document.createElement(productUrl?'a':'article');
      tile.className='product-tile'; tile.dataset.id=p.id;
      if(productUrl){
        tile.href=productUrl;
        tile.target='_blank';
        tile.rel=(p.affiliateUrl || p.amazonUrl) ? 'sponsored noopener noreferrer' : 'noopener noreferrer';
      }
      const [bg,fg]=palettes[p.category]||palettes.Others;
      const imageUrl = resolveImageUrl(p);
      if(imageUrl){
        const img=document.createElement('img');
        img.className='product-image';
        if (p.imageFit === 'contain') img.classList.add('is-contain');
        img.loading='lazy';
        img.decoding='async';
        img.src=imageUrl;
        img.alt=`${p.name} — ${p.brand}`;
        img.addEventListener('error',()=>img.replaceWith(createPlaceholder(p,bg,fg)),{once:true});
        tile.append(img);
      } else {
        tile.append(createPlaceholder(p,bg,fg));
      }
      const info=document.createElement('div');info.className='tile-info';
      info.innerHTML=`<span class="tile-id">${p.id}</span><span class="tile-name"></span><span class="tile-brand"></span><span class="tile-description"></span>${p.year?`<span class="tile-year">${p.year}</span>`:''}`;
      info.querySelector('.tile-name').textContent=p.name; info.querySelector('.tile-brand').textContent=p.brand; info.querySelector('.tile-description').textContent=p.description; tile.append(info); grid.append(tile);
      if (p.imageSourceUrl && isSafeHttpUrl(p.imageSourceUrl) && p.imageLicense) {
        const credit = document.createElement(productUrl ? 'span' : 'a');
        credit.className = 'image-credit';
        credit.textContent = p.imageLicense === 'CC0 1.0'
          ? 'CC0'
          : `${p.imageCredit || 'Image source'} · ${p.imageLicense}`;
        credit.title = `${p.imageCredit || 'Image source'} — ${p.imageLicense}`;
        if (credit.tagName === 'A') {
          credit.href = p.imageSourceUrl;
          credit.target = '_blank';
          credit.rel = 'noopener noreferrer';
        }
        info.append(credit);
      }
    });
    empty.hidden=visible.length!==0;
  }
  const closeSearch = () => {
    searchPanel.hidden = true;
    searchToggle.setAttribute('aria-expanded','false');
  };
  searchToggle.addEventListener('click',()=>{
    const open=searchPanel.hidden;
    searchPanel.hidden=!open;
    searchToggle.setAttribute('aria-expanded',String(open));
    if(open)searchInput.focus();
    else searchToggle.focus();
  });
  document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape' && !searchPanel.hidden){closeSearch();searchToggle.focus();}
  });
  clearSearch.addEventListener('click',()=>{searchInput.value='';render();searchInput.focus()});
  searchInput.addEventListener('input',render);
  gridToggle.addEventListener('click',()=>{document.body.classList.toggle('dense');gridToggle.setAttribute('aria-pressed',String(document.body.classList.contains('dense')))});
  fetch('products.json').then(r=>{if(!r.ok)throw new Error('products.json unavailable');return r.json()}).then(data=>{products=data;render()}).catch(()=>{empty.hidden=false});
})();
