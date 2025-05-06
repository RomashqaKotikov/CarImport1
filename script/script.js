function smoothScrollToBottom() {
    const scrollDuration = 600;
    const targetPosition = document.body.scrollHeight - window.innerHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const scrollStep = distance / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
        const currentPosition = window.scrollY;
        if (currentPosition < targetPosition) {
            window.scrollBy(0, scrollStep);
        } else {
            window.scrollTo(0, targetPosition); // На случай если мы перескочили
            clearInterval(scrollInterval);
        }
    }, 15);
}






document.getElementById('send').addEventListener('click', () => {
    smoothScrollToBottom();
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
};

scrollToTopBtn.addEventListener('click', function() {
    smoothScrollToTop();
});



function smoothScrollToTop() {
    const scrollDuration = 600; 
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}


const customAlert = document.getElementById("customAlert");
const alertTitle = document.getElementById("alertTitle");
const alertMessage = document.getElementById("alertMessage");
const alertCloseBtn = document.getElementById("alertCloseBtn");
const feedbackForm = document.getElementById("feedbackForm");

function showAlert(title, message) {
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    customAlert.style.display = 'flex';
}

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let allFilled = true;
    const formInputs = feedbackForm.querySelectorAll('input[required]');
    
   
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
    });
    
    if (allFilled) {
        showAlert('Внимание', "Мы вам перезвоним");
        feedbackForm.reset()
    } else {
        showAlert('Ошибка', "Пожалуйста, заполните все обязательные поля");
    }
});

alertCloseBtn.addEventListener('click', () => {
    customAlert.style.display = 'none';
});





const ordAlert = document.getElementById('ordAlert');
const ordAlertCloseBtn = document.getElementById('ordAlertCloseBtn');
const ordAlertBtn = document.getElementById('ordAlertBtn');
const ordForm = document.getElementById('ordForm');
const buyLC = document.getElementById('buyLC');
const buyAccord = document.getElementById('buyAccord');
const buyGTR = document.getElementById('buyGTR');
const buySub = document.getElementById('buySub');
const buyCrown = document.getElementById('buyCrown');
const buyChaser = document.getElementById('buyChaser');

buyLC.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

buyAccord.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

buyGTR.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

buySub.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

buyCrown.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

buyChaser.addEventListener('click', () => {
    ordAlert.style.display = 'flex';
})

ordAlertBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    let allFilled = true;
    const formInputs = ordForm.querySelectorAll('input[required]');
    
   
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
    });
    
    if (allFilled) {
        ordAlert.style.display = 'none';
        showAlert('Внимание', "Мы вам перезвоним");
        ordForm.reset()
        alertCloseBtn.addEventListener('click', () => {
            customAlert.style.display = 'none';
        })
    } else {
        ordAlert.style.display = 'none';
        showAlert('Ошибка', "Пожалуйста, заполните все обязательные поля");
        alertCloseBtn.addEventListener('click', () => {
            ordAlert.style.display = 'flex';
        });
    }
});


ordAlertCloseBtn.addEventListener('click', () => {
    ordAlert.style.display = 'none';
});


