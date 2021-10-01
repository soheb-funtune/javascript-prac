

// const imgData = (arg) =>arg.map((item) => item["url"]);    //item.url;

//   `this are litrals`
const imgData = (arg) =>arg.map((item) => `<img src="${item.url}" alt="${item.title}"/>`);    //item.url;

const obj = [ {url:"google.com",title:"Google"},
              {url:"pickupbiz.com",title:"PickupBiz"},
              {url:"gmail.com",title:"GMail"},
              {url:"amazon.com",title:"Amazon"}]
console.log(imgData(obj));