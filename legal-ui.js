(function(){
function isGreek(){return localStorage.getItem('blockwiseLang')==='el';}
function sync(){
 var gr=isGreek();
 document.querySelectorAll('.privacy-link-label').forEach(function(x){x.textContent=gr?'Πολιτική Απορρήτου':'Privacy Policy';});
 document.querySelectorAll('.terms-link-label').forEach(function(x){x.textContent=gr?'Όροι Χρήσης':'Terms of Use';});
 document.querySelectorAll('.cookie-link-label').forEach(function(x){x.textContent=gr?'Πολιτική Cookies':'Cookie Policy';});
 document.querySelectorAll('[data-legal-lang]').forEach(function(x){x.style.display=(x.getAttribute('data-legal-lang')===(gr?'el':'en'))?'block':'none';});
 var title=document.querySelector('.legal-page-title'); if(title) title.textContent=gr?title.getAttribute('data-title-el'):title.getAttribute('data-title-en');
 var upd=document.querySelector('.legal-updated-label'); if(upd) upd.textContent=gr?'Τελευταία ενημέρωση':'Last updated';
 var ack=document.querySelector('.privacy-ack-copy'); if(ack) ack.innerHTML=gr?'Έχω διαβάσει την <a href="privacy.html" target="_blank" rel="noopener"><strong>Πολιτική Απορρήτου</strong></a> και κατανοώ πώς το BlockWise Cyprus θα χρησιμοποιήσει τα προσωπικά μου δεδομένα για να απαντήσει στο αίτημά μου.':'I have read the <a href="privacy.html" target="_blank" rel="noopener"><strong>Privacy Policy</strong></a> and understand how BlockWise Cyprus will use my personal data to respond to this enquiry.';
 var note=document.querySelector('.privacy-form-note'); if(note) note.textContent=gr?'Χρησιμοποιούμε τα στοιχεία σας για να απαντήσουμε στο αίτημά σας και, όπου απαιτείται, για ενέργειες που ζητάτε πριν από τη σύναψη συμφωνίας παροχής υπηρεσιών. Δεν χρησιμοποιούμε στοιχεία αιτημάτων για προωθητική επικοινωνία εκτός αν μας το ζητήσετε ξεχωριστά.':'We use your details to respond to your enquiry and, where relevant, to take steps you request before entering into a service agreement. We do not use enquiry details for marketing unless you separately ask us to.';
}
document.querySelectorAll('[data-lang]').forEach(function(b){b.addEventListener('click',function(){setTimeout(sync,0);});});
sync();
})();