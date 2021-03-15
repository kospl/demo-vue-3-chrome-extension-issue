var popupRootComponent = {
	data: function() {
		return {
			error_info: {
				errors: [] // notice this is an array
			}
		}
	},
	template: `<div></div>`,
	mounted: function(){
		this.save();
	},
	methods: {
		save: function(){
			console.log('saving this to storage', this.error_info);

			chrome.storage.local.set({error_info: this.error_info}, function(){
				chrome.storage.local.get({error_info: {errors: []}}, function(obj){

					console.log('saved result', obj);

					// trying filter array of errors
					console.log(obj.error_info.errors.filter(function(el){
						el.message !== undefined
					}).length);
				});
			});
		}
	}
};

var app = Vue.createApp(popupRootComponent);
popupApp = app.mount('body');