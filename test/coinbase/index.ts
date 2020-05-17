export function expectPaginationObject ({ expect, pagination }) {
  expect(pagination).toHaveProperty('order')
  expect(pagination).toHaveProperty('starting_after')
  expect(pagination).toHaveProperty('ending_before')
  expect(pagination).toHaveProperty('total')
  expect(pagination).toHaveProperty('yielded')
  expect(pagination).toHaveProperty('limit')
  expect(pagination).toHaveProperty('previous_uri')
  expect(pagination).toHaveProperty('next_uri')
}
