def xml(data):
    print 'xml'
    return data

def serializable(data):
    print 'ser'
    return data

def ascii(data):
    print 'ascii'
    return data

func_mapper = {'xml': xml,
               'serializable': serializable,
               'ascii': ascii}

def output(data, format='xml'):
    return func_mapper[format](data)
