const Swal = require('sweetalert2')

Swal.fire({
    title: '',
    imageUrl: "https://res.cloudinary.com/brogrammer/image/upload/v1567835811/Screen_Shot_2019-09-07_at_1.55.15_AM_mitbop.png",
    html: " \n We are <strong>quacking</strong> with excitement that you're here! 😉",
    confirmButtonText: "Let's go!"
    //display time you lasted without visiting a distracting webpage 
  })


  const { value: urlList } = await Swal.fire({
    input: 'url',
    inputPlaceholder: 'Enter url.'
  })

  var array = urlList.split(',');


    if (url) {
        Swal.fire('Entered URL: ' + url);
      }

  
      swal({
        title: '',
        imageUrl: "https://res.cloudinary.com/brogrammer/image/upload/v1567835811/Screen_Shot_2019-09-07_at_1.55.15_AM_mitbop.png",
        html: " \n We are <strong>quacking</strong> with excitement that you're here! 😉",
        showCancelButton: true,
        confirmButtonText: "Next!",
        closeOnConfirm: false
      },
      function(){
        swal("yuh yeet");
      });
  
  
      Swal.fire({
        title: '',
        imageUrl: "https://res.cloudinary.com/brogrammer/image/upload/v1567835811/Screen_Shot_2019-09-07_at_1.55.15_AM_mitbop.png",
        html: " \n We are <strong>quacking</strong> with excitement that you're here! 😉",
        confirmButtonText: "Let's go!"
        //display time you lasted without visiting a distracting webpage 
        
      })