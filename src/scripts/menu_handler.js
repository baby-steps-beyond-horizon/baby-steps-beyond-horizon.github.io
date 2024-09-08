function handle_buttons() {
  btn_holder = document.getElementById('btn-holder');
  drop = document.getElementById('dropdown');
  drop_ctn = document.getElementById('dropdown-content');

  btn_holder.hidden = false;

  holder_width = btn_holder.offsetWidth;

  btn_widths = [80, 90, 135, 115, 140, 130];
  more_width = 140;
  btn_lst = []
  drop_lst = []

  btn_w = 0
  dropped = false;
  
  for (let i = 0; i < 7; i++) {
    if (btn_w + btn_widths[i] + 30 < holder_width) {
      btn_lst.push(document.getElementById(i.toString()));
      btn_w += btn_widths[i] + 30;
    }
    else {
      let j = i - 1;
      while (btn_w + 30 >= holder_width && btn_lst.length > 0) {
        bb = btn_lst.pop();
        drop_lst.push(bb);
        if (!dropped) {
          btn_w + more_width + 30;
          dropped = true;
        }
        btn_w -= btn_widths[j];
      }
      drop_lst.push(document.getElementById(i.toString()));
    }
  }
  
  for (let i = 0; i < btn_lst.length; i++) {
    btn_holder.append(btn_lst[i]);
  }

  btn_holder.append(drop);

  if (drop_lst.length > 0) drop.style.display = 'inline-block';
  else drop.style.display = 'none';

  for (let i = 0; i < drop_lst.length; i++) {
    drop_ctn.append(drop_lst[i]);
  }

  btn_holder.hidden = "false";

}

window.addEventListener('load', function(event) { handle_buttons(); });
window.addEventListener('resize', function(event) { handle_buttons(); });
