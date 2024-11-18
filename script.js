
        const form = document.getElementById('application-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const inputs = form.querySelectorAll('input, select');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
