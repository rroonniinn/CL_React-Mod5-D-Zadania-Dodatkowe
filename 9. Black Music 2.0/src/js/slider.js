class Slider {
    constructor(config) {
        const defaultOpts = {
            selektor : '',
            selektorSlide : '',
            prevSelector : '',
            nextSelector : '',
            animDelay : 2000
        }

        this.options = Object.assign({}, defaultOpts, config);

        this.$slider = $(this.options.selektor); //slider
        this.$slides = this.$slider.find(this.options.selektorSlide); //slajdy
        this.animDelay = this.options.animDelay; //czas pauzy miedzy animacjami
        this.$prevBtn = $(this.options.prevSelector);
        this.$nextBtn = $(this.options.nextSelector);
        this.currentSlide = 0; //obecny slide
        this.timeOut = null;
    }

    nextSlide() {
        this.currentSlide++;
        if (this.currentSlide > this.$slides.length - 1) {
            this.currentSlide = 0;
        }
        console.log(this.currentSlide);
        this.$slides.removeClass('active');
        this.$slides.eq(this.currentSlide).addClass('active');

        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.nextSlide();
        }, this.options.animDelay);
    }

    prevSlide() {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.$slides.length - 1;
        }
        this.$slides.removeClass('active');
        this.$slides.eq(this.currentSlide).addClass('active');

        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.prevSlide();
        }, this.options.animDelay);
    }

    bindBtn() {
        this.$prevBtn.on('click', () => {
            this.prevSlide();
        });
        this.$nextBtn.on('click', () => {
            this.nextSlide();
        });
    }

    init() {
        if (this.$prevBtn.length && this.$nextBtn.length) {
            this.bindBtn();
        } 

        this.timeOut = setTimeout(() => {
            this.nextSlide();
        }, this.animDelay);
    }
}

export { Slider }