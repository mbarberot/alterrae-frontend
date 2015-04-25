var plop = function(user) {
    visit('/login');
    fillIn('input#identification', user.username);
    fillIn('input#password', user.password);
    click('button#submit');
};

export default plop;