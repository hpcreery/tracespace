export {}

interface CustomMatchers<R = unknown> {
  approx(expected: number): R
}

declare global {
  namespace Vi {
    type AsymmetricMatchersContaining = CustomMatchers
  }
}
