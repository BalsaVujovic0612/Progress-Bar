document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const completed = document.getElementById('completed');
    const heading = document.getElementById('heading')
    let progressValue = 0;
    
    // Sakrij "Complited" dok nije završen
    completed.classList.add('hidden');
    
    const interval = setInterval(() => {
        if (progressValue < 100) {
            progressValue += 20;
            // Pretpostavljamo da "bar" i "text" postoje
            const bar = document.getElementById('bar');
            const text = document.getElementById('text');
            bar.style.width = progressValue + '%';
            text.innerText = `Loading...  ${progressValue}%`;
        } else {
            clearInterval(interval);
            completed.classList.remove('hidden');
            completed.classList.add('visible');
            container.classList.add('hidden'); // Sakrij kontejner
            heading.classList.add('hidden')
        }
    }, 2000);
});
