testimonials = [
    {
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
        img: "Hina_Dress_Icon.png"
    },
    {
        name: "Jane Smith",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
        img: "Hina_Nightwear_Icon.png"
    },
    {
        name: "Alice Johnson",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "Hoshino_Swimsuit_Icon.png"
    },
]

function changeTestimonial() {
    const nameElement = document.getElementById("name")
    const textElement = document.getElementById("text")
    const imgElement = document.getElementById("img")

    let index = 0;
    setInterval(() => {
        if (index >= testimonials.length) {
            index = 0; // Reset index if it exceeds the length of testimonials
        }

        const testimonial = testimonials[index];
        nameElement.textContent = testimonial.name;
        textElement.textContent = testimonial.text;
        imgElement.src = testimonial.img;

        index++;
    }, 3000); // Change every 3 seconds
}

changeTestimonial();

