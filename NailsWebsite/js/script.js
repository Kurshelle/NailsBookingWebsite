document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      // Basic validation
      if (!name || !phone || !service || !date || !time) {
        alert('Please fill in all fields.');
        return;
      }

      // Optional: Log to console (for your reference when testing)
      console.log('Booking Request:', { name, phone, service, date, time });

      // Save data to localStorage (so you can view it later if needed)
      const booking = { name, phone, service, date, time, timestamp: new Date().toISOString() };
      let bookings = JSON.parse(localStorage.getItem('nailsxk-bookings') || '[]');
      bookings.push(booking);
      localStorage.setItem('nailsxk-bookings', JSON.stringify(bookings));

      // Redirect to thank you page
      window.location.href = 'thankyoupage.html';
    });
  }
});