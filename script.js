$(document).ready(function () {
    const articles = [
        {
            title: "Are Salesforce Certifications Still Relevant? Top Voices Join the Great Cert Debate",
            author: "Henry Martin",
            date: "January 12, 2025",
            image: "dal1.png",
            preview: "Industry experts weigh in on the evolving landscape of Salesforce certifications...",
        },
        {
            title: "Transform Material Master Data with Strategic Insights",
            author: "Sarah Chen",
            date: "January 11, 2025",
            image: "dal3.png",
            preview: "Learn how to optimize your material master data management...",
        },
    ];

    function createArticleCard(article) {
        return `
            <article class="article-card">
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <h2 class="article-title">${article.title}</h2>
                    <div class="article-meta">By ${article.author} | ${article.date}</div>
                    <p class="article-preview">${article.preview}</p>
                </div>
            </article>
        `;
    }

    const articlesGrid = $(".articles-grid");
    articles.forEach((article) => {
        articlesGrid.append(createArticleCard(article));
    });

    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        articlesGrid.fadeOut(200).fadeIn(200);
    });

    $(".mobile-menu-btn").click(function () {
        $(".nav-menu").toggleClass("active");
    });
});


$(document).ready(function() {
    // Check if dark mode is already set in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('.tab').addClass('dark-mode');
        $('.article-card').addClass('dark-mode');
        $('.nav-link').addClass('dark-mode');
    }

    // Toggle dark mode on button click
    $('.dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
        $('.tab').toggleClass('dark-mode');
        $('.article-card').toggleClass('dark-mode');
        $('.nav-link').toggleClass('dark-mode');

        // Save theme preference to localStorage
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
