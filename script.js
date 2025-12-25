document.addEventListener('DOMContentLoaded', function() {
    // Динамическое изменение свечения заголовка
    const title = document.querySelector('.title');
    if (title) {
        setInterval(() => {
            const opacity = 0.2 + Math.sin(Date.now() / 1000) * 0.15;
            title.style.textShadow = `0 0 20px rgba(255, 255, 255, ${opacity}), 0 0 40px rgba(255, 255, 255, ${opacity * 0.5})`;
        }, 50);
    }
    
    // Добавляем белые частицы при движении мыши
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.96) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#ffffff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = '0 0 6px rgba(255, 255, 255, 0.6)';
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => particle.remove();
    }
    
    // Клик по цене -> переход на @zona84 (только по самой цене, не по всей карточке)
    const prices = document.querySelectorAll('.price-item .price');
    prices.forEach(price => {
        price.style.cursor = 'pointer';
        price.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = 'https://t.me/zona84';
        });
    });
    
    console.log('Сайт загружен успешно!');
});

