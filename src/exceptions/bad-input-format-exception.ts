import Exception from './exception';
import enums from '../configs/enums';

interface InputError {
	mapped?: Function;
}

/**
 * Handles invalid and bad input exceptions
 * @category Exceptions
 */
class BadInputFormatException extends Exception {
	public meta: object | undefined
	public errors: InputError[] | undefined

	/**
	 * @constructor
	 * @param {string} message
	 * @param {InputError} errors
	 */
	public constructor(message?: string, errors?: InputError[]) {
	  super(message);
	  Object.setPrototypeOf(this, new.target.prototype);
	  this.name = BadInputFormatException.name;
	  this.code = enums.HTTP_BAD_REQUEST;
	  this.errors = errors;
	}
}

export default BadInputFormatException;
