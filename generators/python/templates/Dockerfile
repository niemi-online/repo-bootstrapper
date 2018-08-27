FROM python:3.6-jessie
ADD app/ /app
WORKDIR /app

# Pip doesn't install requirements sequentially, so you may 
# have to split your requirements into multiple files here to
# ensure dependencies are properly satisfied
RUN pip install -r requirements-step-1.txt
RUN pip install -r requirements-step-2.txt

CMD ["/usr/local/bin/python", "app.py"]
