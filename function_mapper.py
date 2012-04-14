def xml(data):
    print 'xml'
    return data

def serializable(data):
    print 'ser'
    return data

def ascii(data):
    print 'ascii'
    return data

def output(data, format='xml'):
    return globals()[format](data)
