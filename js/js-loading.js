(function() {

    document.body.className += ' js-loading';

    window.addEventListener('load', showPage, false);

    function showPage() {
        // alert('loaded');
        document.body.className = document.body.className.replace('js-loading', '');
        document.getElementById('loading').remove();
    }
    
})();