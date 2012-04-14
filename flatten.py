def flatten(x):
    if isinstance(x, list) or isinstance(x, tuple):
        return [a for i in x for a in flatten(i)]
    else:
        return [x]

for item in flatten([1, 2, '(', 'b', ('c', 'd'), ['e', 'f', 'g', 3.14], (['y', 4], ('z', 5))]):
    print item

