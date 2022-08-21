// step -1 : add click handler to submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    const useremail = document.getElementById('user-email');
    const email = useremail.value;
    const userPwd = document.getElementById('user-password');
    const pwd = userPwd.value;

    if (email === 'asif@gmail.com' && pwd === 'asif99') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid user!!')
    }
})