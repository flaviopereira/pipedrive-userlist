module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/scss/_colors.scss";
                @import "@/assets/scss/_font.scss";
                @import "@/assets/scss/_text-helpers.scss";
                @import "@/assets/scss/_grid-helpers.scss";
                @import "@/assets/scss/_global.scss";
                `
            }
        }
    }
};
