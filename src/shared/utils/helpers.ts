declare global {
	interface Number {
		convertToKwanzaMoney(): string
		convertToKwanzaMoneyWithoutSymbol(): string
		formatMoney(): string
	}

	interface String {
		formatCurrency(this: string): string
		convertToNumber(this: string): number
		isEmpty(): boolean
	}
}


String.prototype.formatCurrency = function (this: string) {
	const roundedValue = parseFloat(this).toFixed(2);
	return roundedValue.replace(",", ".");
};

Number.prototype.formatMoney = function () {
	const money = this.toLocaleString("pt-PT", {
		style: "currency",
		currency: "AOA"
	})

	return money.replace(/\s/g, ",")
}

String.prototype.isEmpty = function () {
	return this === ""
}

Number.prototype.convertToKwanzaMoney = function () {
	let money = ''
	if (this.valueOf() >= 1000) {

		money = this.toLocaleString("pt-PT", {
			style: "currency",
			currency: "AOA"
		})

		if (this.valueOf() > 9999) {
			const moneyFormated = money.replace(/\s/g, ".").replace("AOA", "Kz")
			return moneyFormated.replace(".Kz", " Kz")
		} else {

			const parts = money.split(",");
			const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			const formattedMoney = integerPart + "," + parts[1]
			return formattedMoney.replace("AOA", "Kz")
		}

	}

	money = this.toLocaleString("pt-PT", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	const parts = money.split(",");
	const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	const formattedMoney = integerPart + "," + parts[1] + " Kz";
	return formattedMoney;
}

Number.prototype.convertToKwanzaMoneyWithoutSymbol = function () {
	let money = ''
	if (this.valueOf() >= 1000) {

		money = this.toLocaleString("pt-PT", {
			style: "currency",
			currency: "AOA"
		})

		if (this.valueOf() > 9999) {
			const moneyFormated = money.replace(/\s/g, ".").replace("AOA", "Kz")
			return moneyFormated.replace(".Kz", "")
		} else {

			const parts = money.split(",");
			const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			const formattedMoney = integerPart + "," + parts[1]
			return formattedMoney.replace("AOA", "")
		}

	} else {
		money = this.toLocaleString("pt-PT", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});

		const parts = money.split(",");
		const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		const formattedMoney = integerPart + "," + parts[1]
		return formattedMoney;
	}
}



const LANG = "pt-PT";
const CURRENCY = "AOA";

/**
 * Formats a numeric value into a currency string.
 * @param {number} value - The numeric value to be formatted.
 * @returns {string} The formatted currency string.
*/
function getFormattedCurrency(value: number): string {
	let money = ''
	if (value.valueOf() >= 1000) {

		money = value.toLocaleString(LANG, {
			style: "currency",
			currency: CURRENCY
		})

		if (value.valueOf() > 9999) {
			const moneyFormated = money.replace(/\s/g, ".").replace(CURRENCY, "Kz")
			return moneyFormated.replace(".Kz", " Kz")
		} else {

			const parts = money.split(",");
			const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			const formattedMoney = integerPart + "," + parts[1]
			return formattedMoney.replace(CURRENCY, "Kz")
		}

	}

	money = value.toLocaleString(LANG, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	const parts = money.split(",");
	const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	const formattedMoney = integerPart + "," + parts[1] + " Kz";
	return formattedMoney;
}

export { getFormattedCurrency }