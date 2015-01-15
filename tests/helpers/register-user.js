export default function(user) {
    visit('/register');
    fillIn('input#username', user.username);
    fillIn('input#password', user.password);
    fillIn('input#password-confirmation', user.password);
    fillIn('input#email', user.email);
    fillIn('input#email-confirmation', user.email);
    click('button#submit');
}