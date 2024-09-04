window.addEventListener('load', function(event) {
  btn_holder = document.getElementById('btn-holder');
  drop = document.getElementById('dropdown');
  drop_ctn = document.getElementById('dropdown-content');

  holder_width = btn_holder.offsetWidth;

  btn_lst = [];
  drop_lst = [];

  btn_width = 0;
  for (let i = 0; i < 7; i++) {
    next_btn = document.getElementById(i.toString());
    if (next_btn.parentNode.id == 'btn-holder') {
      btn_width += next_btn.offsetWidth;
      btn_lst.push(next_btn);
    }
    else {
      drop_lst.push(next_btn);
    }
  }

  drop_lst.reverse();

  // while ((drop_lst.length > 0 && drop_lst[drop_lst.length - 1].offsetWidth + btn_width < holder_width) || 
  //   (drop_lst.length == 1 && drop_lst[0].offsetWidth + btn_width - 80 < holder_width) ) {
  //   to_move = drop_lst.pop();
  //   btn_width += to_move.offsetWidth;
  //   console.log("usuniete", to_move);
  //
  //   btn_holder.append(to_move);
  //   btn_holder.append(drop);
  // }


  add_more = true;
  if (drop.style.display != 'none') {
    add_more = false;
    btn_width += document.getElementById('more').offsetWidth;
  }

  while (btn_width >= holder_width && btn_lst.length > 0) {
    if (add_more) {
      drop.style.display = 'inline-block';
      btn_width += document.getElementById('more').offsetWidth;
      add_more = false;
    }
    to_move = btn_lst.pop();
    btn_width -= to_move.offsetWidth;
    drop_ctn.append(to_move);
    drop_lst.push(to_move);
  }

  if (drop_lst.length == 0) drop.style.display = 'none';
  else drop.style.display = 'inline-block';

  // if (drop_lst.length == 0) drop.style.display = 'none';
}, true);

window.addEventListener('resize', function(event) {
  btn_holder = document.getElementById('btn-holder');
  drop = document.getElementById('dropdown');
  drop_ctn = document.getElementById('dropdown-content');

  holder_width = btn_holder.offsetWidth;

  btn_lst = [];
  drop_lst = [];

  btn_width = 0;
  for (let i = 0; i < 7; i++) {
    next_btn = document.getElementById(i.toString());
    if (next_btn.parentNode.id == 'btn-holder') {
      btn_width += next_btn.offsetWidth;
      btn_lst.push(next_btn);
    }
    else {
      drop_lst.push(next_btn);
    }
  }

  drop_lst.reverse();

  add_more = true;
  if (drop.style.display != 'none') {
    add_more = false;
    btn_width += document.getElementById('more').offsetWidth;
  }

  while (btn_width >= holder_width && btn_lst.length > 0) {
    if (add_more) {
      drop.style.display = 'inline-block';
      btn_width += document.getElementById('more').offsetWidth;
      add_more = false;
    }
    to_move = btn_lst.pop();
    btn_width -= to_move.offsetWidth;
    drop_ctn.append(to_move);
    drop_lst.push(to_move);
  }

  to_move = drop_lst[drop_lst.length - 1];
  while (drop_lst.length > 0 && 180 + btn_width < holder_width) {
    btn_width += to_move.offsetWidth;
    btn_holder.append(to_move);
    btn_holder.append(drop);
    drop_lst.pop();
    to_move = drop_lst[drop_lst.length -1];
  }

  console.log(btn_width, holder_width);

  if (drop_lst.length == 0) drop.style.display = 'none';
  else drop.style.display = 'inline-block';

}, true);
