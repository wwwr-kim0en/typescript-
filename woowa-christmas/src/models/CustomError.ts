import { ERROR_MESSAGE_PREFIX, ERROR_MESSAGE_SUFFIX } from '../commons/constants/errorMessage.ts';

// Validation Error Class
export class ValidationError extends Error {
	constructor(message: string) {
		super(ERROR_MESSAGE_PREFIX + message + ERROR_MESSAGE_SUFFIX);
		this.name = 'ValidationError';
	}
}
