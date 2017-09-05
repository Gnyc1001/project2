  //   function planetPage (x){
  //     x.preventDefault();
  //     fetch(`/services/${x.target.ppage.value}`)
  //       .then(res => res.json())
  //       .then(jsonRes => {
  //         console.log(jsonRes)
  //         const pagep = jsonRes.pagep;
  //         for(inppage in pagep){
  //           let pg = document.createElement('pg');
  //           pg.innerText = `${inppage}: ${pagep[inppage]}`;
  //           document.body.appendChild(pg)

  //         }
  //       })
  //     }

  // function getForm() {
  //   const form = document.querySelector('#ppageNo');
  //   form.addEventListener('submit', (x) => planetPage(x));

  // }

  // document.addEventListener('DOMContentLoaded', getForm);
