Prism.languages.asm6502 = {
  comment: /;.*/,
  directive: {
    pattern: /\.\w+(?= )/,
    alias: 'property',
  },
  string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
  'op-code': {
    pattern:
      /\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,
    alias: 'keyword',
  },
  'hex-number': {
    pattern: /#?\$[\da-f]{1,4}\b/i,
    alias: 'number',
  },
  'binary-number': {
    pattern: /#?%[01]+\b/,
    alias: 'number',
  },
  'decimal-number': {
    pattern: /#?\b\d+\b/,
    alias: 'number',
  },
  register: {
    pattern: /\b[xya]\b/i,
    alias: 'variable',
  },
  punctuation: /[(),:]/,
};
