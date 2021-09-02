function formattedDate(date = new Date) {
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    let year = String(date.getFullYear());
  
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
  
    return `${year}-${month}-${day}`;
  }

export default formattedDate;