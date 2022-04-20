function passwordChanged() {
        var strength = document.getElementById('strength2');
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
        var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{4,}).*", "g");
        var pwd = document.getElementById("typePasswordX");
        if (pwd.value.length == 0) {
            strength.innerHTML = '';
        } else if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'Should contain minimum one uppercase,lowercase and digit';
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Poor!</span>';
        }
    }
    