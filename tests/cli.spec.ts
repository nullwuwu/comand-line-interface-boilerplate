import 'mocha'
import { expect } from 'chai'
import cli from '../src/cli'

describe('Call Cli Main', () => {
  it('return hello cli, miemiemie', () => {
    const result = cli('miemiemie')
    expect(result).to.an('String')
  })
})