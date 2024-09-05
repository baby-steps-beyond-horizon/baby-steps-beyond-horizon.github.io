const interesting_dates = [new Date(2024, 7, 23), new Date(2024, 7, 28), new Date(2024, 8, 1), new Date(2024, 8, 2), new Date(2024, 8, 3), new Date(2024, 8, 4), new Date(2024, 8, 5), new Date(2024, 8, 6), new Date(2024, 8, 7)];

const firstDateOfMonth = (date = new Date()) =>
   new Date(date.getFullYear(), date.getMonth(), 1);

const lastDateOfPrev = (date = new Date()) =>
  new Date(date.getFullYear(), date.getMonth(), 0);

const lastDateOfMonth = (date = new Date()) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

function check_weekend(d) {
  dd = new Date (d.getFullYear(), d.getMonth(), d.getDate());
  if (dd.getDay() % 6 == 0) return true;
  return false;
}

function next_day (dd) {
  return new Date(dd.getFullYear(), dd.getMonth(), dd.getDate() + 1);
}

function check_today (now_date, curr) {
  return now_date.getFullYear() == curr.getFullYear() && 
          now_date.getMonth() == curr.getMonth() && 
          now_date.getDate() == curr.getDate();
}

function check_if_listed (curr) {
  console.log(curr);
  for (let i = 0; i < interesting_dates.length; i++) {
    if (check_today(interesting_dates[i], curr)) return i+1;
  }
  return -1;
}

function change_display (nr) {
  my_info = document.getElementById('c'+nr);

  // my_info.hidden = !my_info.hidden;
  if(my_info.style.display == "none") my_info.style.display = "flex";
  else my_info.style.display = "none";

}
      
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const now_date = new Date();
var curr_month_printed = now_date.getMonth();

function print_calendar (month_change) { //now_date, curr_date) {
  curr_month_printed += month_change;

  curr_date = new Date(now_date.getFullYear() + Math.floor(curr_month_printed / 12), curr_month_printed % 12, 1);

  first_day_of_curr = firstDateOfMonth( curr_date ).getDay();
  last_day_of_curr = lastDateOfMonth( curr_date ).getDay();

  nr_days_of_curr = lastDateOfMonth( curr_date ).getDate();

  nr_days_of_prev = lastDateOfPrev(curr_date).getDate();

  document.getElementById('month').innerHTML = months[curr_date.getMonth()];

  table = document.getElementById('calendar');

  rows = table.getElementsByTagName('tr');
  for (let i = rows.length - 1; i >= 2; i--) {
    rows[i].remove();
  }

  if (first_day_of_curr == 0) first_day_of_curr = 7;

  days_prev = [];

  for (let i = first_day_of_curr-2; i >= 0; i--) {
    to_append = nr_days_of_prev - i

    days_prev.push(to_append);
  }

  row = table.insertRow();

  for (let i = 0; i < days_prev.length; i++) {
    cell = row.insertCell();
    cell.innerHTML = days_prev[i].toString();
    cell.classList.add('prev');
  }

  add_new_row = false;

  interesting_month = curr_date.getMonth();

  curr_print = new Date(curr_date.getFullYear(), curr_date.getMonth(), 1);

  while (curr_print.getMonth() == interesting_month || curr_print.getDay() != 1) {
    if (curr_print.getDay() == 1 && add_new_row) {
      row = table.insertRow();
    }

    cell = row.insertCell();

    cell.innerHTML = curr_print.getDate().toString();

    if (check_weekend(curr_print)) {
      cell.className = 'weekend';
      if (check_today(curr_print, now_date)) cell.className = 'act-weekend';
    }
    else if (check_today(curr_print, now_date)) {
      cell.className = 'act';
    }

    tt = check_if_listed(curr_print);
    if (curr_print.getMonth() != interesting_month) cell.className = 'prev';
    else if (tt > 0) {
      cell.setAttribute("onclick", "change_display("+tt.toString()+")");
      cell.classList.add('inter');
    }

    curr_print = next_day(curr_print);

    add_new_row = true;
  }
}
