FROM squidfunk/mkdocs-material

RUN pip install --no-cache-dir mike && \
    rm -rf /tmp/* /root/.cache && \
    find ${PACKAGES} \
      -type f \
      -path "*/__pycache__/*" \
      -exec rm -f {} \;

ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
