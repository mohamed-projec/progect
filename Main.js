document.addEventListener('DOMContentLoaded', function () {
    // تهيئة التأثيرات الحركية
    initAnimations();
    // تهيئة أزرار البحث
    initSearchButtons();
    // تهيئة اقتراحات البحث
    initSearchSuggestions();
    // تهيئة التنقل
    initNavigation();
    // تهيئة أزرار الصفحة الرئيسية
    initMainButtons();

    // Menu button functionality
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    // Show sidebar when menu button is clicked
    menuBtn.addEventListener('click', function () {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Hide sidebar when close button is clicked
    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Hide sidebar when overlay is clicked
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Hide sidebar when clicking outside
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // شغل العداد لما الصفحة تظهر
    document.addEventListener('DOMContentLoaded', animateStats);

});

function initAnimations() {
    // إضافة تأثيرات للهيدر
    const header = document.querySelector('header');
    header.style.animation = 'slideDownHeader 0.8s cubic-bezier(.5,1.8,.5,1) 0s 1';

    // إضافة تأثيرات للشعار
    const logo = document.querySelector('.logo');
    logo.style.animation = 'logoBounce 2s infinite';

    // إضافة تأثيرات لأزرار التنقل
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
}

function initSearchButtons() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            const searchInput = document.querySelector('.search-input');
            if (searchInput.value.trim() !== '') {
                searchBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    searchBtn.style.transform = 'scale(1)';
                }, 200);

                const query = searchInput.value.trim().toLowerCase();

                const pages = [
                    // ترتيب من الأكثر تحديدًا إلى الأقل
                    { keywords: ['مشكلات سعر الصرف', 'مشكلات', 'problems', 'غش', 'cheat'], url: '../page1/page 1.5.html' },
                    { keywords: ['تطور سعر الصرف', 'تطور', 'history'], url: '../page1/page 1.4.html' },
                    { keywords: ['العوامل المؤثرة', 'عوامل', 'factors'], url: '../page1/page 1.3.html' },
                    { keywords: ['انواع سعر الصرف','أنواع سعر الصرف', 'انواع', 'types'], url: '../page1/page 1.2.html' },
                    { keywords: ['تعريف سعر الصرف', 'سعر الصرف', 'exchange'], url: '../page1/page 1.1.html' },

                    { keywords: ['مشكلات معدل الادخار', 'مشكلات الادخار', 'saving problems'], url: '../page2/page 2.5.html' },
                    { keywords: ['تطور معدل الادخار', 'تطور الادخار', 'saving history'], url: '../page2/page 2.4.html' },
                    { keywords: ['العوامل المؤثرة الادخار', 'عوامل الادخار', 'saving factors'], url: '../page2/page 2.3.html' },
                    { keywords: ['انواع معدل الادخار','أنواع معدل الادخار', 'انواع الادخار', 'saving types'], url: '../page2/page 2.2.html' },
                    { keywords: ['تعريف معدل الادخار', 'معدل الادخار', 'saving'], url: '../page2/page 2.1.html' },

                    { keywords: ['السياسات النقدية', 'سعر الصرف', 'السياسة النقدية'], url: '../page3/page 3.5.html' },
                    { keywords: ['سعر الصرف الحقيقي', 'الادخار العام', 'الادخار الخاص'], url: '../page3/page 3.4.html' },
                    { keywords: ['استقرار سعر الصرف', 'جذب الادخار', 'استقرار العملة'], url: '../page3/page 3.3.html' },
                    { keywords: ['تقلبات سعر الصرف', 'التقلبات', 'سعر الصرف ومعدل الادخار'], url: '../page3/page 3.2.html' },
                    { keywords: ['القوة الشرائية', 'الادخار المحلي', 'تأثير سعر الصرف'], url: '../page3/page 3.1.html' },

                    { keywords: ['الرئيسية', 'home', 'main'], url: '../main/Main.html' }
                ];

                let found = false;
                let foundUrl = '';

                for (let i = 0; i < pages.length; i++) {
                    for (let j = 0; j < pages[i].keywords.length; j++) {
                        if (query === pages[i].keywords[j].toLowerCase()) {
                            found = true;
                            foundUrl = pages[i].url;
                            break;
                        }
                    }
                    if (found) break;
                }

                if (found) {
                    window.location.href = foundUrl;
                } else {
                    // Redirect to notfound page with the search word as parameter
                    window.location.href = 'notfound.html?q=' + encodeURIComponent(searchInput.value.trim());
                }
            }
        });
    }
}



function initSearchSuggestions() {
    const searchInput = document.querySelector('.search-input');
    const suggestionsBox = document.getElementById('suggestions');

    const pages = [
        // ترتيب من الأكثر تحديدًا إلى الأقل
        { title: 'مشكلات سعر الصرف', keywords: ['مشكلات سعر الصرف', 'مشكلات', 'problems', 'غش', 'cheat'], url: '../page1/page 1.5.html' },
        { title: 'تطور سعر الصرف', keywords: ['تطور سعر الصرف', 'تطور', 'history'], url: '../page1/page 1.4.html' },
        { title: 'العوامل المؤثرة', keywords: ['العوامل المؤثرة', 'عوامل', 'factors'], url: '../page1/page 1.3.html' },
        { title: 'أنواع سعر الصرف', keywords: ['انواع سعر الصرف','أنواع سعر الصرف', 'انواع', 'types'], url: '../page1/page 1.2.html' },
        { title: 'تعريف سعر الصرف', keywords: ['تعريف سعر الصرف', 'سعر الصرف', 'exchange'], url: '../page1/page 1.1.html' },

        { title: 'مشكلات معدل الادخار', keywords: ['مشكلات معدل الادخار', 'مشكلات الادخار', 'saving problems'], url: '../page2/page 2.5.html' },
        { title: 'تطور معدل الادخار', keywords: ['تطور معدل الادخار', 'تطور الادخار', 'saving history'], url: '../page2/page 2.4.html' },
        { title: 'العوامل المؤثرة الادخار', keywords: ['العوامل المؤثرة الادخار', 'عوامل الادخار', 'saving factors'], url: '../page2/page 2.3.html' },
        { title: 'أنواع معدل الادخار', keywords: ['انواع معدل الادخار','أنواع معدل الادخار', 'انواع الادخار', 'saving types'], url: '../page2/page 2.2.html' },
        { title: 'تعريف معدل الادخار', keywords: ['تعريف معدل الادخار', 'معدل الادخار', 'saving'], url: '../page2/page 2.1.html' },

        { title: 'السياسات النقدية وسعر الصرف', keywords: ['السياسات النقدية', 'سعر الصرف', 'السياسة النقدية'], url: '../page3/page 3.5.html' },
        { title: 'سعر الصرف الحقيقي والادخار العام والخاص', keywords: ['سعر الصرف الحقيقي', 'الادخار العام', 'الادخار الخاص'], url: '../page3/page 3.4.html' },
        { title: 'استقرار سعر الصرف كعامل لجذب الادخار', keywords: ['استقرار سعر الصرف', 'جذب الادخار', 'استقرار العملة'], url: '../page3/page 3.3.html' },
        { title: 'تقلبات سعر الصرف وتأثيرها على معدل الادخار', keywords: ['تقلبات سعر الصرف', 'التقلبات', 'سعر الصرف ومعدل الادخار'], url: '../page3/page 3.2.html' },
        { title: 'تأثير سعر الصرف على القوة الشرائية والادخار المحلي', keywords: ['القوة الشرائية', 'الادخار المحلي', 'تأثير سعر الصرف'], url: '../page3/page 3.1.html' },

        { title: 'الرئيسية', keywords: ['الرئيسية', 'home', 'main'], url: '../main/Main.html' }
    ];

    searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        suggestionsBox.innerHTML = '';

        if (!query) {
            suggestionsBox.style.display = 'none';
            return;
        }

        // البحث عن مطابقات دقيقة أو جزئية
        let matches = [];
        for (let i = 0; i < pages.length; i++) {
            for (let j = 0; j < pages[i].keywords.length; j++) {
                const keyword = pages[i].keywords[j].toLowerCase();
                if (keyword.includes(query)) {
                    matches.push(pages[i]);
                    break;
                }
            }
        }

        if (matches.length) {
            matches.forEach(page => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.textContent = page.title;
                item.onclick = () => { window.location.href = page.url; };
                suggestionsBox.appendChild(item);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    searchInput.addEventListener('blur', function () {
        setTimeout(() => { suggestionsBox.style.display = 'none'; }, 150);
    });

    searchInput.addEventListener('focus', function () {
        if (suggestionsBox.innerHTML) suggestionsBox.style.display = 'block';
    });
}


function initNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // تأثير عند النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = this.href;
            }, 200);
        });
    });
}

function initMainButtons() {
    const mainButtons = document.querySelectorAll('.main-btn');
    mainButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1) rotate(-2deg)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1) rotate(0)';
        });
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95) rotate(0.8deg)';
            setTimeout(() => {
                button.style.transform = 'scale(1) rotate(0)';
            }, 200);
        });
    });
}

function toggleSubMenu(menuId, element) {
    const submenu = document.getElementById(menuId);
    const arrow = element.querySelector('.arrow');

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        arrow.innerHTML = '&#9656;'; // ▶ (مغلق)
    } else {
        submenu.style.display = 'block';
        arrow.innerHTML = '&#9662;'; // ▼ (مفتوح)
    }
}


// عداد متحرك للأرقام في الإحصائيات
function animateStats() {
    document.querySelectorAll('.stat-num').forEach(stat => {
        let target = +stat.getAttribute('data-target');
        let count = 0;
        let inc = target > 100 ? Math.ceil(target / 40) : 1;
        let delay = 20;
        function update() {
            if (count < target) {
                count += inc;
                if (count > target) count = target;
                stat.innerText = (stat.getAttribute('data-target') === '3') ? `${count}%` : count;
                setTimeout(update, delay);
            } else {
                stat.innerText = (stat.getAttribute('data-target') === '3') ? `${target}%` : target + (stat.getAttribute('data-target') === '250' ? '+' : '');
            }
        }
        update();
    });
}


// Network Animated Background
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'network-canvas';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.right = 0;
    canvas.style.left = 0;
    canvas.style.bottom = 0;
    canvas.style.zIndex = 0;
    document.getElementById('network-bg').appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let points = [];
    let lines = [];
    let pointCount = 25;

    function randomPos(max) {
        return Math.random() * max;
    }

    function createPoints() {
        points = [];
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: randomPos(w),
                y: randomPos(h),
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        // Draw lines
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                let dx = points[i].x - points[j].x;
                let dy = points[i].y - points[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 190) {
                    ctx.strokeStyle = "rgba(19,46,101,0.18)";
                    ctx.lineWidth = 1.3;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }
        // Draw points
        for (let i = 0; i < points.length; i++) {
            ctx.beginPath();
            ctx.arc(points[i].x, points[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = '#132e65';
            ctx.globalAlpha = 0.85;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    function animate() {
        for (let i = 0; i < points.length; i++) {
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;
            if (points[i].x < 0 || points[i].x > w) points[i].vx *= -1;
            if (points[i].y < 0 || points[i].y > h) points[i].vy *= -1;
        }
        draw();
        requestAnimationFrame(animate);
    }

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        createPoints();
    }

    window.addEventListener('resize', resize);
    createPoints();
    animate();
})();
