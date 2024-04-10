import type {Token as MooToken} from 'moo'

/**
 * T-code token type
 *
 * @category Lexer
 */
export const T_CODE = 'T_CODE'

/**
 * G-code token type
 *
 * @category Lexer
 */
export const G_CODE = 'G_CODE'

/**
 * M-code token type
 *
 * @category Lexer
 */
export const M_CODE = 'M_CODE'

/**
 * D-code token type
 *
 * @category Lexer
 */
export const D_CODE = 'D_CODE'

/**
 * Asterisk token type
 *
 * @category Lexer
 */
export const ASTERISK = 'ASTERISK'

/**
 * Percent sign token type
 *
 * @category Lexer
 */
export const PERCENT = 'PERCENT'

/**
 * Equals sign token type
 *
 * @category Lexer
 */
export const EQUALS = 'EQUALS'

/**
 * Comma token type
 *
 * @category Lexer
 */
export const COMMA = 'COMMA'

/**
 * Arithmatic operator token type
 *
 * @category Lexer
 */
export const OPERATOR = 'OPERATOR'

/**
 * Gerber format specification token type
 *
 * @category Lexer
 */
export const GERBER_FORMAT = 'GERBER_FORMAT'

/**
 * Gerber units specification token type
 *
 * @category Lexer
 */
export const GERBER_UNITS = 'GERBER_UNITS'

/**
 * Gerber tool macro token type
 *
 * @category Lexer
 */
export const GERBER_TOOL_MACRO = 'GERBER_TOOL_MACRO'

/**
 * Gerber tool definition token type
 *
 * @category Lexer
 */
export const GERBER_TOOL_DEF = 'GERBER_TOOL_DEF'

/**
 * Gerber load polarity token type
 *
 * @category Lexer
 */
export const GERBER_LOAD_POLARITY = 'GERBER_LOAD_POLARITY'

/**
 * Gerber load polarity token type
 *
 * @category Lexer
 */
export const GERBER_LOAD_MIRRORING = 'GERBER_LOAD_MIRRORING'

/**
 * Gerber load polarity token type
 *
 * @category Lexer
 */
export const GERBER_LOAD_ROTATION = 'GERBER_LOAD_ROTATION'

/**
 * Gerber load polarity token type
 *
 * @category Lexer
 */
export const GERBER_LOAD_SCALING = 'GERBER_LOAD_SCALING'

/**
 * Gerber step repeat token type
 *
 * @category Lexer
 */
export const GERBER_STEP_REPEAT = 'GERBER_STEP_REPEAT'

/**
 * Gerber block aperture token type
 *
 * @category Lexer
 */
export const GERBER_BLOCK_APERTURE = 'GERBER_BLOCK_APERTURE'


/**
 * Gerber macro variable token type
 *
 * @category Lexer
 */
export const GERBER_MACRO_VARIABLE = 'GERBER_MACRO_VARIABLE'

export const DEPRECIATED_GERBER_IMAGE_POLARTIY = 'DEPRECIATED_GERBER_IMAGE_POLARTIY'
export const DEPRECIATED_GERBER_IMAGE_ROTATION = 'DEPRECIATED_GERBER_IMAGE_ROTATION'
export const DEPRECIATED_GERBER_IMAGE_AXES = 'DEPRECIATED_GERBER_IMAGE_AXES'
export const DEPRECIATED_GERBER_IMAGE_MIRRORING = 'DEPRECIATED_GERBER_IMAGE_MIRRORING'
export const DEPRECIATED_GERBER_IMAGE_OFFSET = 'DEPRECIATED_GERBER_IMAGE_OFFSET'
export const DEPRECIATED_GERBER_IMAGE_SCALE_FACTOR = 'DEPRECIATED_GERBER_IMAGE_SCALE_FACTOR'

/**
 * Semicolor token type
 *
 * @category Lexer
 */
export const SEMICOLON = 'SEMICOLON'

/**
 * Drill file units token type
 *
 * @category Lexer
 */
export const DRILL_UNITS = 'DRILL_UNITS'

/**
 * Drill zero-inclusion token type
 *
 * @category Lexer
 */
export const DRILL_ZERO_INCLUSION = 'DRILL_ZERO_INCLUSION'

/**
 * Coordinate axis character token type
 *
 * @category Lexer
 */
export const COORD_CHAR = 'COORD_CHAR'

/**
 * Number token type
 *
 * @category Lexer
 */
export const NUMBER = 'NUMBER'

/**
 * Word token type
 *
 * @category Lexer
 */
export const WORD = 'WORD'

/**
 * Whitespace token type
 *
 * @category Lexer
 */
export const WHITESPACE = 'WHITESPACE'

/**
 * Newline token type
 *
 * @category Lexer
 */
export const NEWLINE = 'NEWLINE'

/**
 * Catchall token type
 *
 * @category Lexer
 */
export const CATCHALL = 'CATCHALL'

/**
 * Error token type
 *
 * @category Lexer
 */
export const ERROR = 'ERROR'

/**
 * Union of all available token types
 *
 * @category Lexer
 */
export type TokenType =
  | typeof T_CODE
  | typeof G_CODE
  | typeof M_CODE
  | typeof D_CODE
  | typeof ASTERISK
  | typeof PERCENT
  | typeof EQUALS
  | typeof COMMA
  | typeof OPERATOR
  | typeof GERBER_FORMAT
  | typeof GERBER_UNITS
  | typeof GERBER_TOOL_MACRO
  | typeof GERBER_TOOL_DEF
  | typeof GERBER_LOAD_POLARITY
  | typeof GERBER_LOAD_MIRRORING
  | typeof GERBER_LOAD_ROTATION
  | typeof GERBER_LOAD_SCALING
  | typeof GERBER_STEP_REPEAT
  | typeof GERBER_MACRO_VARIABLE
  | typeof GERBER_BLOCK_APERTURE
  | typeof SEMICOLON
  | typeof DRILL_UNITS
  | typeof DRILL_ZERO_INCLUSION
  | typeof COORD_CHAR
  | typeof NUMBER
  | typeof WORD
  | typeof WHITESPACE
  | typeof NEWLINE
  | typeof CATCHALL
  | typeof ERROR
  | typeof DEPRECIATED_GERBER_IMAGE_POLARTIY
  | typeof DEPRECIATED_GERBER_IMAGE_ROTATION
  | typeof DEPRECIATED_GERBER_IMAGE_AXES
  | typeof DEPRECIATED_GERBER_IMAGE_MIRRORING
  | typeof DEPRECIATED_GERBER_IMAGE_OFFSET
  | typeof DEPRECIATED_GERBER_IMAGE_SCALE_FACTOR


/**
 * {@linkcode Lexer} token
 *
 * @category Lexer
 */
export interface Token extends MooToken {
  /** Token identifier */
  type: TokenType
}
