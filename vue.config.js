module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/assets/styles/_variables.scss";
					@import "@/assets/styles/_fonts.scss";
					@import "@/assets/styles/_normalize.scss";	
				`
			}
		}
	}
}