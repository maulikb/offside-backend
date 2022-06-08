import { HttpStatus, ValidationError } from '@nestjs/common';
import { CustomErrorCodes } from '../@types/custom-error-codes';
import { CustomBaseException } from './custom-base.exception';

export class CustomValidationException extends CustomBaseException {
  public errors: ValidationError[];
  constructor(errors: ValidationError[]) {
    super(errors, HttpStatus.BAD_REQUEST, CustomErrorCodes.VALIDATION_FAILED);
    this.errors = errors;
  }
}
