import { Universe } from "rust-wasm";

const pre = document.getElementById("rust-wasm-canvas");
const universe = Universe.new();
const renderLoop = callback => {

	if (Math.round(callback / 10) * 10 % 100 == 0) {
	    pre.textContent = universe.render();
        universe.tick();
	}


    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);