import { ERROR_MESSAGES, rSpecialChar } from '../constants/messages.js';
import OPTIONS from '../constants/options.js';

class InputValidator {
  /**
   * 자동차 이름 입력에 대한 유효성 체크
   * @param {string[]} carNames
   */
  static carNames(carNames) {
    const nameSet = new Set();
    const { exceedName, emptyName, specialChar, duplicatedName } =
      ERROR_MESSAGES;

    if (carNames.length < 2) throw new Error(exceedName);
    carNames.forEach(el => {
      if (el.length > OPTIONS.maxNaming) throw new Error(exceedName);
      if (!el.length) throw new Error(emptyName);
      if (rSpecialChar.test(el)) throw new Error(specialChar);
      if (nameSet.has(el)) throw new Error(duplicatedName);
      nameSet.add(el);
    });
  }

  static laps(number) {
    const { positive, integer } = ERROR_MESSAGES;

    if (number < OPTIONS.minLaps) throw new Error(positive);
    if (Number.isNaN(number)) throw new Error(integer);
  }
}

export default InputValidator;
