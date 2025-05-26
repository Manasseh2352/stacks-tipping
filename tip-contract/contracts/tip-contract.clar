(define-map tips
  { recipient: principal }
  { total: uint })

(define-public (send-tip (recipient principal))
  (begin
    (map-set tips { recipient: recipient }
      { total: (+ u1 (default-to u0 (get total (map-get? tips { recipient: recipient })))) })
    (ok true)))

(define-read-only (get-tips (recipient principal))
  (ok (default-to { total: u0 } (map-get? tips { recipient: recipient }))))
