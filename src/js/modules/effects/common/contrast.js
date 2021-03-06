import Effects_common_class from '../abstract/css.js';

class Effects_contrast_class extends Effects_common_class {

	contrast() {
		var params = [
			{name: "value", title: "Percentage:", value: 40, range: [-100, 100]},
		];
		this.show_dialog('contrast', params);
	}

	convert_value(value) {
		var system_value;
		if (value > 0) {
			system_value = value / 100 + 1;
		}
		else if (value < 0) {
			system_value = value / 100 + 1;
		}
		else {
			system_value = 1;
		}

		return system_value;
	}

	demo(canvas_id, canvas_thumb){
		var canvas = document.getElementById(canvas_id);
		var ctx = canvas.getContext("2d");

		//draw
		var size = this.convert_value(40, null, 'preview');
		ctx.filter = "contrast("+size+")";
		ctx.drawImage(canvas_thumb, 0, 0);
		ctx.filter = 'none';
	}

}

export default Effects_contrast_class;