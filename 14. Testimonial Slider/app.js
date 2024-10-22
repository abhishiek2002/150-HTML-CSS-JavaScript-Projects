const testimonials = [
    {
        name: "Janko Ferlic",
        photoUrl: "https://images.pexels.com/photos/590479/pexels-photo-590479.jpeg?auto=compress&cs=tinysrgb&w=600",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto harum, adipisci distinctio, aut ad nisi nihil facilis iste fugit inventore sapiente commodi vero. Illo eius quisquam magnam. Nemo fuga modi alias. Dolorem, quaerat1"
    },
    {
        name: "Nurlan",
        photoUrl: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ=",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto harum, adipisci distinctio, aut ad nisi nihil facilis iste fugit inventore sapiente commodi vero. Illo eius quisquam magnam. Nemo fuga modi alias. Dolorem, quaerat2"
    },
    {
        name: "Ashok",
        photoUrl: "https://media.istockphoto.com/id/1473469964/photo/senior-man-on-wheelchair-at-park.jpg?b=1&s=612x612&w=0&k=20&c=n_RDMwZyQnqg1f2sedpLvjfOobBbp4SdzUVLLKZSJdU=",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto harum, adipisci distinctio, aut ad nisi nihil facilis iste fugit inventore sapiente commodi vero. Illo eius quisquam magnam. Nemo fuga modi alias. Dolorem, quaerat3"
    }

];

const imgEl = document.querySelector('.img-div');
const textEl = document.querySelector('p');
const nameEl = document.querySelector('.userName');

let index =0;



updateTestimonial();


function updateTestimonial() {
    console.log('runnig');
    
    const {name, photoUrl, text} = testimonials[index];

    imgEl.style.background = `url(${photoUrl})`;
    imgEl.style.backgroundSize = 'cover';
    imgEl.style.backgroundPosition = `center`;
    textEl.innerText = text;
    nameEl.innerText = name;
    index++;

    setTimeout(updateTestimonial, 5000);

    if(index === testimonials.length){
        index=0;
    };

};

