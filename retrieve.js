document.addEventListener('DOMContentLoaded', function() {
    var mySubmitButton = document.getElementById('saveAndRetrieve');
    // onClick's logic below:
    mySubmitButton.addEventListener('load')
    mySubmitButton.addEventListener('click', function() {
        getPin();
    });
});

function getPin()
{
   chrome.tabs.executeScript({file:"retrieve.js"},function(){
     console.log("popup is executed");
   });
}
