function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length>num){
    str=str.slice(0,8)+"...";
  }
  
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);