import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
  base: '/SputnikPro_test_2_1/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				action: resolve(__dirname, "src/html/action.html"),
				parameters: resolve(__dirname, "src/html/parameters.html"),
				seasonality: resolve(__dirname, "src/html/seasonality.html"),
				regular_assort: resolve(__dirname, "src/html/regular_assort.html"),
				promo: resolve(__dirname, "src/html/promo.html"),
				new_products: resolve(__dirname, "src/html/new_products.html"),
			}
		}
	}
});
