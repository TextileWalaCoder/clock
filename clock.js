setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hour = document.getElementById('hour');
  minute = document.getElementById('minute');
  second = document.getElementById('second');
  // caculated formula for Hrs hand rotation 
  hrotation = 30 * htime + mtime / 2;
  // calculated formula for Min hand Rotation
  mrotation = 6 * mtime;
  // calculated formula for Sec hand rotation
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
